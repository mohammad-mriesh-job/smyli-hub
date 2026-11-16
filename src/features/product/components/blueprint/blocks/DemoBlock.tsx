import type {ReactElement} from 'react'
import type {Block} from '../../../catalog/blocks.types'
import {BarsBlockView} from './BarsBlockView'
import {ButtonBlockView} from './ButtonBlockView'
import {CardBlockView} from './CardBlockView'
import {ChatBlockView} from './ChatBlockView'
import {ChecksBlockView} from './ChecksBlockView'
import {ChipsBlockView} from './ChipsBlockView'
import {CompareBlockView} from './CompareBlockView'
import {CrowdBlockView} from './CrowdBlockView'
import {DayBlockView} from './DayBlockView'
import {FlowBlockView} from './FlowBlockView'
import {FormBlockView} from './FormBlockView'
import {FunnelBlockView} from './FunnelBlockView'
import {GraphBlockView} from './GraphBlockView'
import {LedgerBlockView} from './LedgerBlockView'
import {LevelsBlockView} from './LevelsBlockView'
import {MapBlockView} from './MapBlockView'
import {MatrixBlockView} from './MatrixBlockView'
import {MonoBlockView} from './MonoBlockView'
import {MonthBlockView} from './MonthBlockView'
import {NoteBlockView} from './NoteBlockView'
import {NotesBlockView} from './NotesBlockView'
import {ParaBlockView} from './ParaBlockView'
import {PhotosBlockView} from './PhotosBlockView'
import {QrBlockView} from './QrBlockView'
import {RingBlockView} from './RingBlockView'
import {RowsBlockView} from './RowsBlockView'
import {SearchBlockView} from './SearchBlockView'
import {StatsBlockView} from './StatsBlockView'
import {StatusBlockView} from './StatusBlockView'
import {TimelineBlockView} from './TimelineBlockView'
import {TogglesBlockView} from './TogglesBlockView'
import {WeekBlockView} from './WeekBlockView'

/**
 * Draws one try-out block with the view for its kind. The switch has no default on purpose: the return type leaves
 * out `undefined`, so a new kind in `Block` fails type-checking here until it has a view.
 */
export function DemoBlock({block, accent}: {block: Block; accent: string}): ReactElement {
    switch (block.k) {
        case 'card':
            return <CardBlockView {...{block, accent}} />
        case 'rows':
            return <RowsBlockView {...{block, accent}} />
        case 'form':
            return <FormBlockView {...{block, accent}} />
        case 'chat':
            return <ChatBlockView {...{block, accent}} />
        case 'notes':
            return <NotesBlockView {...{block, accent}} />
        case 'flow':
            return <FlowBlockView {...{block, accent}} />
        case 'levels':
            return <LevelsBlockView {...{block, accent}} />
        case 'bars':
            return <BarsBlockView {...{block, accent}} />
        case 'funnel':
            return <FunnelBlockView {...{block, accent}} />
        case 'ring':
            return <RingBlockView {...{block, accent}} />
        case 'ledger':
            return <LedgerBlockView {...{block, accent}} />
        case 'toggles':
            return <TogglesBlockView {...{block, accent}} />
        case 'week':
            return <WeekBlockView {...{block, accent}} />
        case 'photos':
            return <PhotosBlockView {...{block, accent}} />
        case 'qr':
            return <QrBlockView {...{block, accent}} />
        case 'status':
            return <StatusBlockView {...{block, accent}} />
        case 'note':
            return <NoteBlockView {...{block, accent}} />
        case 'map':
            return <MapBlockView {...{block, accent}} />
        case 'graph':
            return <GraphBlockView {...{block, accent}} />
        case 'compare':
            return <CompareBlockView {...{block, accent}} />
        case 'matrix':
            return <MatrixBlockView {...{block, accent}} />
        case 'timeline':
            return <TimelineBlockView {...{block, accent}} />
        case 'day':
            return <DayBlockView {...{block, accent}} />
        case 'checks':
            return <ChecksBlockView {...{block, accent}} />
        case 'stats':
            return <StatsBlockView {...{block, accent}} />
        case 'button':
            return <ButtonBlockView {...{block, accent}} />
        case 'chips':
            return <ChipsBlockView {...{block, accent}} />
        case 'search':
            return <SearchBlockView {...{block, accent}} />
        case 'crowd':
            return <CrowdBlockView {...{block, accent}} />
        case 'mono':
            return <MonoBlockView {...{block, accent}} />
        case 'para':
            return <ParaBlockView {...{block, accent}} />
        case 'month':
            return <MonthBlockView {...{block, accent}} />
    }
}
