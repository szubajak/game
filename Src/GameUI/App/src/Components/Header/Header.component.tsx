import * as React from 'react'
import { StyledHeaderGrid } from './Header.styles'
import { Typography } from '@material-ui/core'

export const HeaderComponent: React.FC = () => (
    <StyledHeaderGrid>
        <Typography className="app-name">{'The .NET stack & React template'}</Typography>
        <Typography className="logo">{'Szubarga.NET \u258c'}</Typography>
    </StyledHeaderGrid>
)
