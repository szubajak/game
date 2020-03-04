import * as React from 'react'
import {
    StyledGameCard,
    StyledHiddenCardContent,
    StyledInBattleCardContent,
    StyledInBattleFaceDownCardContent,
} from './GameCard.styles'
import { GameCard, CardState, Player } from '~/Core/Models'
import { Typography, Box } from '@material-ui/core'
import { AppVM } from '~Core/AppViewModel'

export const GameCardComponent: React.FC<GameCard> = card => {
    const trySelectMe = (): void => AppVM.trySelectNextGameCard(card.id)

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

    const getBackgroundColor = (): string => {
        if (card.state !== CardState.FaceDown) {
            return 'silver'
        }

        if (card.owner === Player.Black) {
            return 'white'
        }

        return 'black'
    }

    const getFontColor = (): string => {
        if (card.state === CardState.FaceDown) {
            if (card.owner === Player.Black) {
                return 'black'
            }

            return 'white'
        }

        if (card.suit === 'Hearts' || card.suit === 'Diamonds') {
            return 'red'
        }

        return 'black'
    }

    const cardContent = (
        <Box className="card-face">
            <Typography variant="h3">{getSuit()}</Typography>
            <Typography variant="h6">{card.name}</Typography>
        </Box>
    )

    const getCardContent = (): JSX.Element => {
        switch (card.state) {
            case CardState.FaceDown:
                return (
                    <StyledHiddenCardContent fontcolor={getFontColor()}>
                        <Box className="card-face">
                            <Typography variant="h3">?</Typography>
                        </Box>
                    </StyledHiddenCardContent>
                )
            case CardState.InBattleFaceDown:
                return (
                    <StyledInBattleFaceDownCardContent
                        fontcolor={getFontColor()}
                    >
                        <Box className="card-face">
                            <Typography variant="h3">{'\u2694'}</Typography>
                        </Box>
                    </StyledInBattleFaceDownCardContent>
                )
            case CardState.InBattle:
                return (
                    <StyledInBattleCardContent fontcolor={getFontColor()}>
                        {cardContent}
                    </StyledInBattleCardContent>
                )
            default:
                return <React.Fragment />
        }
    }

    return (
        <StyledGameCard
            backgroundcolor={getBackgroundColor()}
            onClick={trySelectMe}
        >
            {getCardContent()}
        </StyledGameCard>
    )
}
