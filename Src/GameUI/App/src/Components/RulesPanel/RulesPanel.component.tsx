import * as React from 'react'
import {
    StyledRulesExpansionPanel,
    StyledExpansionPanelDetails,
    StyledExpansionPanelSummary,
    StyledIconText,
    StyledText,
    StyledStatusText,
    StyledIcons,
} from './RulesPanel.styles'
import { Typography, Box } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import { AppVM } from '~Core/AppViewModel'

export const RulesPanelComponent: React.FC = () => {
    const [status, setStatus] = React.useState('game is not started')

    React.useEffect(() => {
        AppVM.gameEngine.status.subscribe(newStatus => {
            setStatus(newStatus)
        })
    })

    return (
        <StyledRulesExpansionPanel>
            <StyledExpansionPanelSummary
                expandIcon={<ExpandLess style={{ color: 'black' }} />}
            >
                <StyledIcons>
                    <StyledIconText fontcolor="red">{'\u2665'}</StyledIconText>
                    <StyledIconText fontcolor="red">{'\u2666'}</StyledIconText>
                    <StyledIconText fontcolor="darkblue">
                        {'\u2694'}
                    </StyledIconText>
                    <StyledIconText fontcolor="black">
                        {'\u2660'}
                    </StyledIconText>
                    <StyledIconText fontcolor="black">
                        {'\u2663'}
                    </StyledIconText>
                </StyledIcons>
                <StyledStatusText>{status}</StyledStatusText>
                <StyledText>Rules</StyledText>
            </StyledExpansionPanelSummary>
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
        </StyledRulesExpansionPanel>
    )
}
