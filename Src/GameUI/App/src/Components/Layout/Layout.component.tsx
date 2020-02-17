import * as React from 'react'
import { GlobalStyle, LayoutStyle } from './Layout.style'
import { LogoComponent } from '~/Components/Logo/Logo.component'
import { CardsComponent } from '~/Components/Cards/Cards.component'
import { GameInterfaceComponent } from '~/Components/GameInterface/GameInterface.component'

export const LayoutComponent: React.FunctionComponent = () => {
    return (
        <LayoutStyle>
            <GlobalStyle />
            <LogoComponent />
            <CardsComponent />
            <GameInterfaceComponent />
        </LayoutStyle>
    )
}
