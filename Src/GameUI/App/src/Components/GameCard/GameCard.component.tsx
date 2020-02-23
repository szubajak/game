import * as React from 'react'
import {
    StyledHiddenGameCard,
    StyledReadyToBattleGameCard,
    StyledDefeatedGameCard,
    StyledVictoriousGameCard,
} from './GameCard.styles'
import { GameCard, Player, CardState } from '~/Core/Models'
import { CardContent, Typography } from '@material-ui/core'
import { AppVM } from '~Core/AppViewModel'

export const GameCardComponent: React.FC<GameCard> = card => {
    const isExposed = (): boolean => {
        return card.player !== Player.Croupier
    }

    const selectMe = (): void => AppVM.exposeNextGameCard(card.id)

    const getSuit = (): string => {
        switch (card.suit) {
            case 'Hearts':
                return '\u2665'
            case 'Diamonds':
                return '\u2666'
            case 'Spades':
                return '\u2660'
            case 'Clubs':
                return '\u2663'
            default:
                return '?'
        }
    }

    const getColor = (): string => {
        if (card.suit === 'Hearts' || card.suit === 'Diamonds') {
            return 'red'
        }

        return 'black'
    }

    const getPlayerColor = (): string => {
        if (card.player === Player.Green) {
            return 'green'
        }

        return 'blue'
    }

    if (!isExposed()) {
        return (
            <StyledHiddenGameCard onClick={selectMe}>
                <CardContent>
                    <Typography variant="h3">?</Typography>
                </CardContent>
            </StyledHiddenGameCard>
        )
    }

    const cardContent = (
        <CardContent>
            <Typography variant="h3">{getSuit()}</Typography>
            <Typography variant="h6">{card.value}</Typography>
        </CardContent>
    )

    switch (card.state) {
        case CardState.Defeated:
            return (
                <StyledDefeatedGameCard
                    color={getColor()}
                    playercolor={getPlayerColor()}
                >
                    {cardContent}
                </StyledDefeatedGameCard>
            )
        case CardState.Victorious:
            return (
                <StyledVictoriousGameCard
                    color={getColor()}
                    playercolor={getPlayerColor()}
                >
                    {cardContent}
                </StyledVictoriousGameCard>
            )
        default:
            return (
                <StyledReadyToBattleGameCard
                    color={getColor()}
                    playercolor={getPlayerColor()}
                >
                    {cardContent}
                </StyledReadyToBattleGameCard>
            )
    }
}
