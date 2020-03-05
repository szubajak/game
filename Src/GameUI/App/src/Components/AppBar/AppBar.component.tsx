import * as React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { AppVM } from '~Core/AppViewModel'
import { StyledAppBar } from './AppBar.styles'

export const AppBarComponent: React.FunctionComponent = () => {
    const startNewGame = (): void => {
        AppVM.startNewGame()
    }

    return (
        <StyledAppBar position="relative">
            <Toolbar>
                <Button color="inherit" onClick={startNewGame}>
                    Start New Game
                </Button>
            </Toolbar>
        </StyledAppBar>
    )
}
