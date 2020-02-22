import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NoSsr, CssBaseline, Box } from '@material-ui/core'
import {
    StyledMainContainer,
    StyledMainGrid,
    StyledHeaderBox,
} from './Layout.styles'
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core/styles'
import { LogoComponent } from '~/Components/Logo/Logo.component'
import { AppBarComponent } from '~Components/AppBar/AppBar.component'
import { GameBoardComponent } from '~Components/GameBoard/GameBoard.component'
import { ScorePanelComponent } from '~Components/ScorePanel/ScorePanel.component'

const gameTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#6772e5',
        },
    },
})

export const LayoutComponent: React.FunctionComponent = () => (
    <NoSsr>
        <StylesProvider injectFirst>
            <CssBaseline />
            <MuiThemeProvider theme={gameTheme}>
                <ThemeProvider theme={gameTheme}>
                    <StyledMainContainer fixed>
                        <StyledMainGrid>
                            <StyledHeaderBox>
                                <LogoComponent />
                            </StyledHeaderBox>
                            <Box>
                                <GameBoardComponent />
                            </Box>
                            <Box>
                                <ScorePanelComponent />
                            </Box>
                            <AppBarComponent />
                        </StyledMainGrid>
                    </StyledMainContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    </NoSsr>
)
