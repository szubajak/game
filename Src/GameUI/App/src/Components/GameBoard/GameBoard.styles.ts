import styled from 'styled-components'
import { Paper, Box, Typography } from '@material-ui/core'
import { BackgroundColor, FontColor } from '~/Core/Models'

export const StyledGameBoard = styled.div`
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const StyledPlayerBoard = styled(Paper)`
    margin: 1% auto;
    height: min-content;
    width: 95%;
    border-radius: 20px;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    background-color: ${(props: BackgroundColor): string =>
        props.backgroundcolor};
`

export const StyledCards = styled(Box)`
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    overflow: visible;
`

export const StyledHeaderBox = styled(Box)`
    width: 100%;
    text-align: center;
`

export const StyledHeader = styled(Typography)`
    margin: 1vh auto;
    font-size: 2vw;
    color: ${(props: FontColor): string => props.fontcolor};
`
