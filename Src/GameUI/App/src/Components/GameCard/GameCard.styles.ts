import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import { FontColor } from '~/Core/Models'

export const StyledGameCard = styled(Paper)`
    && {
        margin: 10px;
        padding: 0;
        border-radius: 2px;
        user-select: none;
        overflow: visible;
        flex: 0 0 auto;
        background-color: transparent;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        transition: 0.3s;
    }

    &:hover {
        transform: translateY(2px);
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px 0px;
    }
`
const StyledCard = styled(Typography)`
    user-select: none;
    font-size: 7vw;
    line-height: 7vw;
    text-align: center;

    @media only screen and (min-width: 1700px) {
        font-size: 6vw;
        line-height: 6vw;
    }

    @media only screen and (max-width: 500px) {
        font-size: 10vw;
        line-height: 10vw;
    }
`

export const StyledCardFaceDown = styled(StyledCard)`
    color: darkblue;
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
