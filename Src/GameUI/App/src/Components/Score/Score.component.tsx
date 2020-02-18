import * as React from 'react'
import { ScoreStyle } from './Score.style'
import { Engine } from '~Core/GameEngine'

export const ScoreComponent: React.FunctionComponent = () => {
    const [redScore, setRedScore] = React.useState(0)
    const [blueScore, setBlueScore] = React.useState(0)

    React.useEffect(() => {
        Engine.redScore.subscribe(redScore => {
            setRedScore(redScore)
        })
        Engine.blueScore.subscribe(blueScore => {
            setBlueScore(blueScore)
        })
    })

    return (
        <ScoreStyle>
            <span>{redScore} [RED]</span>
            <span>{blueScore} [BLUE]</span>
        </ScoreStyle>
    )
}
