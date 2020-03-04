import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core'

export const StyledStatePanel = styled(Box)`
    width: 100%;
`

export const StyledInfoMessage = styled(Typography)`
    width: 100%;
    margin: 10px 0;
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
    color: red;
    grid-column-start: 1;
    grid-column-end: span 2;
`
