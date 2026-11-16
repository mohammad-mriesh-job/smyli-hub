import {useLocation} from 'react-router'
import type {HubModule} from './module.types'

/** The open module: the one whose id is the path's first segment ('/technical/releases' is Technical). */
export function useCurrentModule(modules: HubModule[]) {
    const id = useLocation().pathname.split('/')[1]
    return modules.find((m) => m.id === id) ?? modules[0]
}
