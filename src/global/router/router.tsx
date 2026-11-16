import {createHashRouter, Navigate, Outlet, ScrollRestoration} from 'react-router'
import {financialModule} from '@features/financial'
import {marketingModule} from '@features/marketing'
import {productModule} from '@features/product'
import {technicalModule} from '@features/technical'
import {uiuxModule} from '@features/uiux'
import {AppLayout} from '@global/layouts/AppLayout'
import {RouteError} from './RouteError'

// Composition root: the only place in global/ that imports features, and only their index.ts.
// The header's module menu lists the modules in this order; the first one opens when the hub opens.
const modules = [productModule, technicalModule, financialModule, marketingModule, uiuxModule]

// Hash routing keeps deep links working on any static host without server rewrites.
export const router = createHashRouter([
    {
        // A new page opens at the top; back and forward return to where the page was left.
        element: (
            <>
                <ScrollRestoration />
                <AppLayout modules={modules}>
                    <Outlet />
                </AppLayout>
            </>
        ),
        errorElement: <RouteError />,
        children: [
            ...modules.flatMap(({id, sections}) => [
                // '/technical' opens the module's first section.
                {
                    path: `/${id}`,
                    element: (
                        <Navigate
                            to={sections[0].path}
                            replace
                        />
                    )
                },
                ...sections.map(({path, Page}) => ({path, element: <Page />}))
            ]),
            {
                path: '*',
                element: (
                    <Navigate
                        to={modules[0].sections[0].path}
                        replace
                    />
                )
            }
        ]
    }
])
