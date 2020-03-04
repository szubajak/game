import * as React from 'react'
import {
    StyledGameBoard,
    StyledCards,
    StyledHeaderBox,
    StyledPlayerBoard,
    StyledHeader,
} from './GameBoard.styles'
import { GameCard, Player } from '~/Core/Models'
import { AppVM } from '~Core/AppViewModel'
import { GameCardComponent } from '~/Components/Aggregator'

export const GameBoardComponent: React.FunctionComponent = () => {
    const [whiteCards, setWhiteCards] = React.useState(new Array<GameCard>())
    const [blackCards, setBlackCards] = React.useState(new Array<GameCard>())
    const [whiteScore, setWhiteScore] = React.useState(0)
    const [blackScore, setBlackScore] = React.useState(0)

    React.useEffect(() => {
        AppVM.gameEngine.gameBoard.subscribe(newGameBoard => {
            setWhiteCards(newGameBoard.whiteCards)
            setBlackCards(newGameBoard.blackCards)
            setWhiteScore(newGameBoard.whiteCards.length)
            setBlackScore(newGameBoard.blackCards.length)
        })
    })

    const getBackgroundColor = (player: Player): string => {
        return player === Player.White ? 'white' : 'black'
    }

    const getFontColor = (player: Player): string => {
        return player === Player.White ? 'black' : 'white'
    }

    const getScore = (player: Player): number => {
        return player === Player.White ? whiteScore : blackScore
    }

    const getPlayerBoard = (
        cards: Array<GameCard>,
        player: Player
    ): JSX.Element => {
        return (
            <StyledPlayerBoard
                backgroundcolor={getBackgroundColor(player)}
                elevation={6}
            >
                <StyledHeaderBox>
                    <StyledHeader fontcolor={getFontColor(player)}>
                        {Player[player]}
                    </StyledHeader>
                </StyledHeaderBox>
                <StyledCards>
                    {cards.map(gameCard => (
                        <GameCardComponent
                            key={gameCard.id}
                            id={gameCard.id}
                            suit={gameCard.suit}
                            name={gameCard.name}
                            power={gameCard.power}
                            state={gameCard.state}
                            owner={gameCard.owner}
                        />
                    ))}
                </StyledCards>
                <StyledHeaderBox>
                    <StyledHeader fontcolor={getFontColor(player)}>
                        {getScore(player)}
                    </StyledHeader>
                </StyledHeaderBox>
            </StyledPlayerBoard>
        )
    }

    return (
        <StyledGameBoard>
            {getPlayerBoard(whiteCards, Player.White)}
            {getPlayerBoard(blackCards, Player.Black)}
        </StyledGameBoard>
    )
}
