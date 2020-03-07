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

    const getScore = (player: Player): number => {
        return player === Player.White ? whiteScore : blackScore
    }

    const getBackgroundColor = (player: Player): string => {
        return player === Player.White ? 'white' : 'black'
    }

    const getColor = (player: Player): string => {
        return player === Player.White ? 'black' : 'white'
    }

    const getPlayerBoard = (
        cards: Array<GameCard>,
        player: Player
    ): JSX.Element => {
        return (
            <StyledPlayerBoard
                variant="elevation"
                elevation={6}
                bordercolor={getColor(player)}
            >
                <StyledHeaderBox backgroundcolor={getBackgroundColor(player)}>
                    <StyledHeader fontcolor={getColor(player)}>
                        {Player[player]}
                    </StyledHeader>
                </StyledHeaderBox>
                <StyledCards variant="outlined">
                    {cards.map(gameCard => (
                        <GameCardComponent
                            key={gameCard.id}
                            id={gameCard.id}
                            suit={gameCard.suit}
                            name={gameCard.name}
                            power={gameCard.power}
                            state={gameCard.state}
                            owner={gameCard.owner}
                            icon={gameCard.icon}
                        />
                    ))}
                </StyledCards>
                <StyledHeaderBox backgroundcolor={getBackgroundColor(player)}>
                    <StyledHeader fontcolor={getColor(player)}>
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
