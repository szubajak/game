import * as React from 'react'
import {
    StyledGameCard,
    StyledCardFaceDown,
    StyledCardInBattleFaceDown,
    StyledCardFaceUp,
} from './GameCard.styles'
import { GameCard, CardState } from '~/Core/Models'
import { AppVM } from '~Core/AppViewModel'

export const GameCardComponent: React.FC<GameCard> = card => {
    const trySelectMe = (): void => AppVM.trySelectNextGameCard(card.id)

    const getFontColor = (): string => {
        if (
            card.state === CardState.FaceDown ||
            card.state === CardState.InBattleFaceDown
        ) {
            return 'darkblue'
        }

        if (card.suit === 'Hearts' || card.suit === 'Diamonds') {
            return 'red'
        }

        return 'black'
    }

    const getCardContent = (): JSX.Element => {
        switch (card.state) {
            case CardState.FaceDown:
                return <StyledCardFaceDown>{'\uD83C\uDCA0'}</StyledCardFaceDown>
            case CardState.InBattleFaceDown:
                return (
                    <StyledCardInBattleFaceDown>
                        {'\uD83C\uDCA0'}
                    </StyledCardInBattleFaceDown>
                )
            case CardState.InBattle:
                return (
                    <StyledCardFaceUp fontcolor={getFontColor()}>
                        {card.icon}
                    </StyledCardFaceUp>
                )
            default:
                return <React.Fragment />
        }
    }

    return (
        <StyledGameCard onClick={trySelectMe}>
            {getCardContent()}
        </StyledGameCard>
    )
}
