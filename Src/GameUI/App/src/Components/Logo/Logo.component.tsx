import * as React from 'react'
import { StyledLogo } from './Logo.styles'
import logo from '~/Assets/Images/logo-md.png'

export const LogoComponent: React.FC = () => (
    <StyledLogo src={logo} alt="Logo" />
)
