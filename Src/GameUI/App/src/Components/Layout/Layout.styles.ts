import styled from 'styled-components'
import { Container, Box } from '@material-ui/core'

export const StyledMainContainer = styled(Container)`
    min-height: 900px;
`

export const StyledMainGrid = styled.div`
    background-color: lightblue;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: min-content auto min-content min-content;
`

export const StyledHeaderBox = styled(Box)`
    text-align: right;
    background-color: #2e3e60;
`
