import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NoSsr, CssBaseline, Box } from '@material-ui/core'
import {
    StyledMainContainer,
    StyledMainGrid,
    StyledHeaderGrid,
} from './Layout.styles'
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core/styles'
import {
    LogoComponent,
    AppTitleComponent,
    GameBoardComponent,
    StatePanelComponent,
    AppBarComponent,
    RulesPanelComponent,
} from '~/Components/Aggregator'

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
                            <StyledHeaderGrid>
                                <AppTitleComponent />
                                <LogoComponent />
                            </StyledHeaderGrid>
                            <Box>
                                <RulesPanelComponent />
                            </Box>
                            <Box>
                                <GameBoardComponent />
                            </Box>
                            <StatePanelComponent />
                            <AppBarComponent />
                        </StyledMainGrid>
                    </StyledMainContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    </NoSsr>
)
