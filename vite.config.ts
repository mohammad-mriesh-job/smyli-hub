import react from '@vitejs/plugin-react'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'

export default defineConfig({
    // Relative paths, so the built site works from any folder: a GitHub Pages project site
    // (https://<account>.github.io/<repo>/) as well as a domain's root. The hash router needs nothing else.
    base: './',
    plugins: [react()],
    resolve: {
        alias: {
            '@global': fileURLToPath(new URL('./src/global', import.meta.url)),
            '@features': fileURLToPath(new URL('./src/features', import.meta.url))
        }
    }
})
