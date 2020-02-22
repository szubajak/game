import * as React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { AppVM } from '~Core/AppViewModel'
import { AppBar } from '@material-ui/core'

export const AppBarComponent: React.FunctionComponent = () => {
    const startNewGame = (): void => {
        AppVM.startNewGame()
    }

    return (
        <AppBar position="relative">
            <Toolbar>
                <Button color="inherit" onClick={startNewGame}>
                    Start New Game
                </Button>
            </Toolbar>
        </AppBar>
    )
}
