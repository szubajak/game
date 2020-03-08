import styled from 'styled-components'
import { Paper, Box, Typography } from '@material-ui/core'
import { FontColor, BackgroundColor } from '~/Core/Models'

export const StyledGameBoard = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const StyledPlayerBoard = styled(Box)`
    margin: 0;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    overflow: hidden;
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
    margin: 2px auto;
    color: ${(props: FontColor): string => props.fontcolor};

    @media only screen and (max-width: 400px) {
        font-size: 12px;
    }

    @media only screen and (min-width: 401px) {
        font-size: 14px;
    }

    @media only screen and (min-width: 1000px) {
        font-size: 20px;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 30px;
    }
`
