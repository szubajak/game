import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core'
import { BackgroundColor, FontColor } from '~/Core/Models'

export const StyledGameCard = styled(Card)`
    text-align: center;
    margin: 1%;
    width: 100px;
    height: 120px;
    user-select: none;
    background-color: ${(props: BackgroundColor): string =>
        props.backgroundcolor};

    @media only screen and (max-width: 600px) {
        width: 80px;
        height: 96px;
    }
`

const StyledCardContent = styled(CardContent)`
    width: 100%;
    height: 100%;
    color: ${(props: FontColor): string => props.fontcolor};
    display: flex;
    align-content: stretch;
    &:last-child {
        padding: 0px;
    }
`

export const StyledHiddenCardContent = styled(StyledCardContent)`
    cursor: pointer;

    .card-face {
        align-self: center;
        flex-grow: 1;
        flex-shrink: 1;
    }

    &:hover {
        color: orange;
        animation-name: hover;
        animation-timing-function: linear;
        animation-duration: 2s;
        animation-iteration-count: infinite;

        @keyframes hover {
            0% {
                transform: translate(0, 0);
            }
            20% {
                transform: scale(1.2, 1.2);
            }
            40% {
                transform: skew(20deg, 5deg);
            }
            80% {
                transform: skew(-20deg, -5deg);
            }
        }
    }
`

export const StyledInBattleCardContent = styled(StyledCardContent)`
    .card-face {
        align-self: center;
        flex-grow: 1;
        flex-shrink: 1;
        animation-name: in-battle;
        animation-timing-function: linear;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

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

export const StyledInBattleFaceDownCardContent = styled(StyledCardContent)`
    .card-face {
        align-self: center;
        flex-grow: 1;
        flex-shrink: 1;
        animation-name: in-battle-face-down;
        animation-timing-function: linear;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes in-battle-face-down {
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

export const StyledDefeatedGameCard = styled(StyledGameCard)`
    background-color: lightgray;
    cursor: auto;
    div {
        h3 {
            transform: rotateZ(90deg);
        }
    }
`

export const StyledVictoriousGameCard = styled(StyledGameCard)`
    background-color: lightgray;
    cursor: auto;
    div {
        animation-name: victorious;
        animation-timing-function: linear;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes victorious {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateY(6px);
        }
        100% {
            transform: translateX(0);
        }
    }
`
