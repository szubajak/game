import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core'
import { BackgroundColor, FontColor } from '~/Core/Models'

export const StyledGameCard = styled(Card)`
    text-align: center;
    margin: 3px;
    width: 6vw;
    height: calc(6vw * 1.2);
    user-select: none;
    background-color: ${(props: BackgroundColor): string =>
        props.backgroundcolor};

    @media only screen and (min-width: 1600px) {
        width: 4vw;
        height: calc(4vw * 1.2);
    }
`

const StyledCardContent = styled(CardContent)`
    width: 100%;
    height: 100%;
    color: ${(props: FontColor): string => props.fontcolor};
    display: grid;

    &:last-child {
        padding: 0px;
    }
`

export const StyledHiddenCardContent = styled(StyledCardContent)`
    cursor: pointer;

    .back {
        align-self: center;
        justify-self: center;
        font-size: 2vw;
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
    grid-template-rows: 1fr 1fr;
    animation-name: in-battle;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    .suit {
        align-self: center;
        justify-self: center;
        font-size: 2.2vw;
    }

    .value {
        align-self: center;
        justify-self: center;
        font-size: 1.3vw;
    }

    @media only screen and (min-width: 1600px) {
        .suit {
            font-size: 1.6vw;
        }

        .value {
            font-size: 1vw;
        }
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
    animation-name: in-battle-face-down;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;

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

    .in-battle-face-down {
        align-self: center;
        justify-self: center;
        font-size: 2vw;
    }
`
