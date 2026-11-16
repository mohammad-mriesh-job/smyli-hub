import type {SvgIconComponent} from '@mui/icons-material'
import type {ComponentType} from 'react'

/** One page of a module, listed in the sidebar while its module is open. */
export type ModuleSection = {
    /** The full path. It starts with the module's id: '/product/blueprint'. */
    path: string
    label: string
    Icon: SvgIconComponent
    Page: ComponentType
    /** A short tag beside the label, such as 'Preview'. */
    badge?: string
}

/** A part of the hub (Product, Technical...), picked from the menu in the header. */
export type HubModule = {
    /** The first segment of every section's path. */
    id: string
    label: string
    /** One line under the name in the module menu. */
    summary: string
    Icon: SvgIconComponent
    color: string
    sections: ModuleSection[]
}
