import * as React from 'react'
import { LogoStyle } from './Logo.style'
import logo from '~/Assets/Images/logo-md.png'

export const LogoComponent: React.FunctionComponent = () => {
    return (
        <LogoStyle>
            <img src={logo} alt="Logo" />
        </LogoStyle>
    )
}
