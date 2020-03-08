import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core'
import { FontColor } from '~/Core/Models'

export const StyledGameCard = styled(Box)`
    && {
        padding: 0;
        user-select: none;
        overflow: visible;
        flex: 0 0 auto;
        background-color: transparent;
        transition: 0.3s;

        @media only screen and (max-width: 400px) {
            margin: 3px;
        }

        @media only screen and (min-width: 401px) {
            margin: 4px;
        }

        @media only screen and (min-width: 1000px) {
            margin: 5px;
        }

        @media only screen and (min-width: 1600px) {
            margin: 6px;
        }

        @media only screen and (min-width: 2400px) {
            margin: 10px;
        }
    }

    &:hover {
        transform: translateY(2px);
    }
`
const StyledCard = styled(Typography)`
    user-select: none;
    text-align: center;

    @media only screen and (max-width: 400px) {
        font-size: 50px;
        line-height: 50px;
    }

    @media only screen and (min-width: 401px) {
        font-size: 70px;
        line-height: 70px;
    }

    @media only screen and (min-width: 1000px) {
        font-size: 100px;
        line-height: 100px;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 110px;
        line-height: 110px;
    }

    @media only screen and (min-width: 1900px) {
        font-size: 130px;
        line-height: 130px;
    }

    @media only screen and (min-width: 2400px) {
        font-size: 200px;
        line-height: 200px;
    }
`

export const StyledCardFaceDown = styled(StyledCard)`
    color: #011b56;
    cursor: pointer;
`

export const StyledCardInBattleFaceDown = styled(StyledCard)`
    color: red;
`

export const StyledCardFaceUp = styled(StyledCard)`
    color: ${(props: FontColor): string => props.fontcolor};
    overflow: hidden;
    animation-name: in-battle;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @keyframes in-battle {
        0% {
            transform: translateX(0);
        }
        33% {
            transform: translateX(6px);
        }
        66% {
            transform: translateX(-6px);
        }
        100% {
            transform: translateX(0);
        }
    }
`
