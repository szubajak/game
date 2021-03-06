import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NoSsr, CssBaseline, Box } from '@material-ui/core'
import { StyledMainGrid } from './Layout.styles'
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core/styles'
import {
    GameBoardComponent,
    AppBarComponent,
    RulesPanelComponent,
    HeaderComponent,
} from '~/Components/Aggregator'

const gameTheme = createMuiTheme({
    typography: {
        fontFamily: '"Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
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
                    <StyledMainGrid>
                        <HeaderComponent />
                        <GameBoardComponent />
                        <Box>
                            <RulesPanelComponent />
                        </Box>
                        <AppBarComponent />
                    </StyledMainGrid>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    </NoSsr>
)
