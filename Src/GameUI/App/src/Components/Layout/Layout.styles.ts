import styled from 'styled-components'
import { Container } from '@material-ui/core'

export const StyledMainContainer = styled(Container)`
    min-width: 480px;
`

export const StyledMainGrid = styled.div`
    background-color: lightblue;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: min-content min-content auto min-content min-content;
`

export const StyledHeaderGrid = styled.div`
    background-color: #2e3e60;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 600px) {
        grid-template-columns: auto;
    }
`
