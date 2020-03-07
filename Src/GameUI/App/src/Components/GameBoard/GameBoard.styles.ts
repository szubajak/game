import styled from 'styled-components'
import { Paper, Box, Typography } from '@material-ui/core'
import { FontColor, BackgroundColor, BorderColor } from '~/Core/Models'

export const StyledGameBoard = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const StyledPlayerBoard = styled(Paper)`
    margin: 10px auto auto auto;
    height: auto;
    width: 95%;
    border-radius: 20px;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    overflow: hidden;
    border: 2px solid ${(props: BorderColor): string => props.bordercolor};
`

export const StyledCards = styled(Paper)`
    height: 100%;
    width: 100%;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
`

export const StyledHeaderBox = styled(Box)`
    background-color: ${(props: BackgroundColor): string =>
        props.backgroundcolor};
    width: 100%;
    text-align: center;
`

export const StyledHeader = styled(Typography)`
    margin: 1vh auto;
    font-size: 20px;
    color: ${(props: FontColor): string => props.fontcolor};
`
