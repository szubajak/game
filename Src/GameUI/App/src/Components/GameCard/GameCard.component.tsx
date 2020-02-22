import * as React from 'react'
import { StyledGameCard } from './GameCard.styles'
import { GameCard, Player } from '~/Core/Models'
import { CardContent, Typography } from '@material-ui/core'
import { AppVM } from '~Core/AppViewModel'

export const GameCardComponent: React.FunctionComponent<GameCard> = card => {
    const isExposed = (): boolean => {
        return card.player !== Player.Croupier
    }

    const selectMe = (): void => AppVM.exposeNextCard(card.id)

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

    const getBorderColor = (): string => {
        if (card.player === Player.Green) {
            return 'green'
        }

        return 'blue'
    }

    if (isExposed()) {
        return (
            <StyledGameCard color={getColor()} borderColor={getBorderColor()}>
                <CardContent>
                    <Typography variant="h3">{getSuit()}</Typography>
                    <Typography variant="h5">{card.value}</Typography>
                </CardContent>
            </StyledGameCard>
        )
    }

    return (
        <StyledGameCard onClick={selectMe} color="black" borderColor="white">
            <CardContent>
                <Typography variant="h3">?</Typography>
            </CardContent>
        </StyledGameCard>
    )
}
