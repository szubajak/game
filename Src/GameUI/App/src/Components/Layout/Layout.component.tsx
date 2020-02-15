import * as React from 'react'
import { LayoutStyle } from './Layout.style'
import { LogoComponent } from '~/Components/Logo/Logo.component'
import { CardComponent } from '~/Components/Card/Card.component'

export const LayoutComponent: React.FunctionComponent = () => {
    return (
        <LayoutStyle>
            <LogoComponent />
            <CardComponent />
        </LayoutStyle>
    )
}
