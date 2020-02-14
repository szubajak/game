import * as React from 'react'
import StyledLayout from './Layout.styled'
import Logo from '~/Components/Logo/Logo.component'

const Layout: React.FunctionComponent = () => {
    return (
        <StyledLayout>
            <Logo />
        </StyledLayout>
    )
}

export default Layout