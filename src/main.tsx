import '@fontsource-variable/geist'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router/dom'
import {AppProviders} from '@global/providers/AppProviders'
import {router} from '@global/router/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    </StrictMode>
)
