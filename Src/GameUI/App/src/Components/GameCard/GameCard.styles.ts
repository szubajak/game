import styled from 'styled-components'
import Card from '@material-ui/core/Card'

interface StyledGameCardProps {
    color: string
    playercolor: string
}

const StyledGameCard = styled(Card)`
    text-align: center;
    margin: 20px 5px;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 120px;
    justify-content: space-evenly;
    user-select: none;
    overflow: hidden;
`

export const StyledHiddenGameCard = styled(StyledGameCard)`
    color: black;
    border: 3px solid white;
    cursor: pointer;
`

export const StyledExposedGameCard = styled(StyledGameCard)`
    color: ${(props: StyledGameCardProps): string => props.color};
    border: 3px solid
        ${(props: StyledGameCardProps): string => props.playercolor};
`

export const StyledReadyToBattleGameCard = styled(StyledExposedGameCard)`
    div {
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

export const StyledDefeatedGameCard = styled(StyledExposedGameCard)`
    background-color: lightgray;
    cursor: auto;
    div {
        h3 {
            transform: rotateZ(90deg);
        }
    }
`

export const StyledVictoriousGameCard = styled(StyledExposedGameCard)`
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
