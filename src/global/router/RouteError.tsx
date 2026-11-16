import {Alert, Button, Container, Stack} from '@mui/material'

/** Shown instead of a stack trace if a page crashes. Reloading usually recovers. */
export function RouteError() {
    return (
        <Container
            maxWidth='xs'
            sx={{py: 6, px: 2}}>
            <Stack spacing={2}>
                <Alert severity='error'>Something went wrong on this page. Please try again.</Alert>
                <Button
                    variant='contained'
                    onClick={() => window.location.reload()}>
                    Try again
                </Button>
                <Button href='#/'>Back to the hub</Button>
            </Stack>
        </Container>
    )
}
