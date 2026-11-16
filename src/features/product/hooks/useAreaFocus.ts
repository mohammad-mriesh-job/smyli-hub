import {useSearchParams} from 'react-router'
import type {AreaId} from '../catalog/catalog.types'
import {areaById} from '../catalog/pillars'

/** The product area a link points at on the journey (`?view=journey&area=events`), or null. */
export function useAreaFocus(): AreaId | null {
    const [params] = useSearchParams()
    const asked = params.get('area')
    return asked !== null && Object.prototype.hasOwnProperty.call(areaById, asked) ? (asked as AreaId) : null
}
