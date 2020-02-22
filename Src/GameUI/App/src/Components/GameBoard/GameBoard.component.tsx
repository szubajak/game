import * as React from 'react'
import { StyledGameBoard } from './GameBoard.styles'
import { GameCardComponent } from '~Components/GameCard/GameCard.component'
import { GameCard } from '~/Core/Models'
import { AppVM } from '~Core/AppViewModel'

export const GameBoardComponent: React.FunctionComponent = () => {
    const [gameCards, setGameCards] = React.useState(new Array<GameCard>())

    React.useEffect(() => {
        AppVM.gameCards.subscribe(newGameCards => {
            setGameCards(newGameCards)
        })
    })

    return (
        <StyledGameBoard>
            {gameCards.map(gameCard => (
                <GameCardComponent
                    key={gameCard.id}
                    id={gameCard.id}
                    suit={gameCard.suit}
                    value={gameCard.value}
                    power={gameCard.power}
                    player={gameCard.player}
                    state={gameCard.state}
                />
            ))}
        </StyledGameBoard>
    )
}
