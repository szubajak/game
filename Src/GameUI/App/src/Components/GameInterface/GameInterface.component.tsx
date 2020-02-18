import * as React from 'react'
import { GameInterfaceStyle } from './GameInterface.style'
import { Engine } from '~Core/GameEngine'
import { ScoreComponent } from '~/Components/Score/Score.component'

export const GameInterfaceComponent: React.FunctionComponent = () => {
    const [message, setMessage] = React.useState('Click start')

    React.useEffect(() => {
        Engine.message.subscribe(newMessage => {
            setMessage(newMessage)
        })
    })

    const startGame = (): void => {
        Engine.startGame()
    }

    return (
        <GameInterfaceStyle>
            <ScoreComponent />
            <div className="message">
                <span>{message}</span>
            </div>
            <div className="button">
                <button onClick={startGame}>Start</button>
            </div>
        </GameInterfaceStyle>
    )
}
