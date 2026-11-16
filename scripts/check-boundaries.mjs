// Enforces the folder rules that a linter can't express:
//   1. A feature never imports another feature (src/features/a -> src/features/b).
//   2. global/ never imports features, except global/router (the composition root).
//   3. Whoever imports a feature from outside it goes through its index.ts.
// And the rule that a component is one self-contained unit (its TypeScript, styles and JSX in one file):
//   4. A components/ folder holds component files only (.tsx exporting a component), plus assets.
//   5. Any other .tsx exports a component too, except the entry point and the route table.
//   6. Styles are never exported on their own (a fooSx or fooStyles, or an exported SxProps value).
// And the rule that global/ holds only what is really shared:
//   7. A global file that only one feature imports belongs in that feature; one nobody imports is dead. Some
//      duplication between features is better than a global file bent to serve each of them.
import {existsSync, readdirSync, readFileSync, statSync} from 'node:fs'
import {dirname, join, relative, resolve, sep} from 'node:path'

const src = resolve(import.meta.dirname, '../src')
const aliases = {'@global/': join(src, 'global') + sep, '@features/': join(src, 'features') + sep}
const importPattern = /(?:import|export)\s[^'"]*?from\s+['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g

function files(dir) {
    return readdirSync(dir).flatMap((name) => {
        const path = join(dir, name)
        if (statSync(path).isDirectory()) return files(path)
        return /\.tsx?$/.test(name) ? [path] : []
    })
}

function resolveImport(file, spec) {
    for (const [alias, target] of Object.entries(aliases)) {
        if (spec.startsWith(alias)) return target + spec.slice(alias.length)
    }
    return spec.startsWith('.') ? resolve(dirname(file), spec) : null
}

/** "src/features/auth/x.ts" -> { area: "features", feature: "auth", rest: "x.ts" } */
function locate(path) {
    const [area, feature, ...rest] = relative(src, path).split(sep)
    return {area, feature, rest: rest.join('/')}
}

const errors = []
for (const file of files(src)) {
    const from = locate(file)
    for (const match of readFileSync(file, 'utf8').matchAll(importPattern)) {
        const spec = match[1] ?? match[2]
        const target = resolveImport(file, spec)
        if (!target) continue
        const to = locate(target)
        if (to.area !== 'features') continue
        const where = `${relative(src, file)} imports '${spec}'`
        const sameFeature = from.area === 'features' && from.feature === to.feature
        if (from.area === 'features' && !sameFeature) errors.push(`${where}: features must not import other features`)
        if (from.area === 'global' && from.feature !== 'router')
            errors.push(`${where}: only global/router may import features`)
        if (!sameFeature && to.rest !== '' && to.rest !== 'index')
            errors.push(`${where}: import the feature's index.ts`)
    }
}

const componentExport = /^export function [A-Z]/m
const notComponents = new Set(['main.tsx', join('global', 'router', 'router.tsx')])
const styleExport =
    /^export (?:(?:const|let|function) \w+(?:Sx|Styles?)\b|(?:const|let) \w+\s*:\s*SxProps\b|function \w+\([^)]*\)\s*:\s*SxProps\b)/m
for (const file of files(src)) {
    const where = relative(src, file)
    const code = readFileSync(file, 'utf8')
    const isComponent = file.endsWith('.tsx') && componentExport.test(code)
    if (where.split(sep).includes('components') && !isComponent)
        errors.push(
            `${where}: a components/ folder holds component files only; move this next to its users or into utils/, hooks/`
        )
    else if (file.endsWith('.tsx') && !isComponent && !notComponents.has(where))
        errors.push(`${where}: a .tsx file exports a component; plain logic or data is a .ts file`)
    if (styleExport.test(code))
        errors.push(
            `${where}: styles belong inside the component that uses them; share a component, not a style object`
        )
}

/** The file an import path names: as written, with .ts or .tsx, or a folder's index.ts. */
function existingFile(path) {
    for (const candidate of [path, `${path}.ts`, `${path}.tsx`, join(path, 'index.ts')]) {
        if (existsSync(candidate) && statSync(candidate).isFile()) return candidate
    }
    return null
}

const importers = new Map()
for (const file of files(src)) {
    for (const match of readFileSync(file, 'utf8').matchAll(importPattern)) {
        const target = resolveImport(file, match[1] ?? match[2])
        const found = target && existingFile(target)
        if (!found) continue
        if (!importers.has(found)) importers.set(found, new Set())
        importers.get(found).add(file)
    }
}
for (const file of files(src)) {
    const here = locate(file)
    // global/router is the composition root: its route table and pages exist to put features together.
    if (here.area !== 'global' || here.feature === 'router') continue
    const users = [...(importers.get(file) ?? [])].map(locate)
    const features = new Set(users.filter((u) => u.area === 'features').map((u) => u.feature))
    if (users.length === 0) errors.push(`${relative(src, file)}: nothing imports this; delete it`)
    else if (users.every((u) => u.area === 'features') && features.size === 1)
        errors.push(`${relative(src, file)}: only features/${[...features][0]} uses this; move it into that feature`)
}

if (errors.length) {
    console.error(errors.join('\n'))
    process.exit(1)
}
console.log('Feature boundaries, component files and global/ usage OK')
