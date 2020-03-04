import * as React from 'react'
import {
    StyledRulesPanel,
    StyledExpansionPanelDetails,
} from './RulesPanel.styles'
import { ExpansionPanelSummary, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

export const RulesPanelComponent: React.FC = () => {
    const getSuitPowerOrder = (): string => '\u2665 \u2666 \u2694 \u2660 \u2663'

    return (
        <StyledRulesPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMore style={{ color: 'white' }} />}
            >
                <Typography className="icons">{getSuitPowerOrder()}</Typography>
                <Typography className="header">Rules</Typography>
            </ExpansionPanelSummary>
            <StyledExpansionPanelDetails>
                <Typography variant="h5">
                    The goal is to be the first player to win all 52 cards
                </Typography>
                <Typography variant="h6">THE DEAL</Typography>
                <Typography variant="body1">
                    The deck is divided evenly, with each player receiving 26
                    cards, face down.
                </Typography>
                <Typography variant="h6">THE PLAY</Typography>
                <Typography variant="body1">
                    Each player turns up a card and the player with the higher
                    card takes both cards and puts them, face down, on his
                    stack. If the cards are the same rank, it is War. Each
                    player turns up one card face down and one card face up. The
                    player with the higher cards takes both piles (six cards).
                    If the turned-up cards are again the same rank, each player
                    places another card face down and turns another card face
                    up. The player with the higher card takes all 10 cards, and
                    so on.
                </Typography>
                <Typography variant="h6">THE WINNER</Typography>
                <Typography variant="body1">
                    The game ends when one player has won all the cards.
                </Typography>
            </StyledExpansionPanelDetails>
        </StyledRulesPanel>
    )
}
