import * as React from 'react'
import {
    StyledRulesExpansionPanel,
    StyledExpansionPanelDetails,
    StyledExpansionPanelSummary,
    StyledIcon,
    StyledLabel,
    StyledStatus,
    StyledHeader,
    StyledLink,
    StyledText,
    StyledSubHeader,
} from './RulesPanel.styles'
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
                expandIcon={<ExpandLess style={{ color: 'darkblue' }} />}
            >
                <StyledStatus>{status}</StyledStatus>
                <StyledLabel>Info</StyledLabel>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
                <StyledLink href="https://github.com/szubajak/game">
                    Link to GitHub repository
                </StyledLink>
                <StyledIcon fontcolor="red">{'\u2665'}</StyledIcon>
                <StyledIcon fontcolor="red">{'\u2666'}</StyledIcon>
                <StyledIcon fontcolor="darkblue">{'\u2694'}</StyledIcon>
                <StyledIcon fontcolor="black">{'\u2660'}</StyledIcon>
                <StyledIcon fontcolor="black">{'\u2663'}</StyledIcon>
                <StyledHeader>
                    The goal is to be the first player to win all 52 cards
                </StyledHeader>
                <StyledSubHeader>THE DEAL</StyledSubHeader>
                <StyledText>
                    The deck is divided evenly, with each player receiving 26
                    cards, face down.
                </StyledText>
                <StyledSubHeader>THE PLAY</StyledSubHeader>
                <StyledText>
                    Each player turns up a card and the player with the higher
                    card takes both cards and puts them, face down, on his
                    stack. If the cards are the same rank, it is War. Each
                    player turns up one card face down and one card face up. The
                    player with the higher cards takes both piles (six cards).
                    If the turned-up cards are again the same rank, each player
                    places another card face down and turns another card face
                    up. The player with the higher card takes all 10 cards, and
                    so on.
                </StyledText>
                <StyledSubHeader>THE WINNER</StyledSubHeader>
                <StyledText>
                    The game ends when one player has won all the cards.
                </StyledText>
            </StyledExpansionPanelDetails>
        </StyledRulesExpansionPanel>
    )
}
