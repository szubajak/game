import * as React from 'react'
import { GameInterfaceStyle } from './GameInterface.style'
import { GameEngine } from '~/Core/Engine'

export const GameInterfaceComponent: React.FunctionComponent = () => {
    const getCards = (): void => {
        GameEngine.fetchCards()
    }

    return (
        <GameInterfaceStyle>
            <button onClick={getCards}>Start</button>
        </GameInterfaceStyle>
    )
}
