import * as React from 'react'
import { StyledScorePanel } from './ScorePanel.style'
import { AppVM } from '~Core/AppViewModel'

export const ScorePanelComponent: React.FunctionComponent = () => {
    const [greenScore, setGreenScore] = React.useState(0)
    const [blueScore, setBlueScore] = React.useState(0)

    React.useEffect(() => {
        AppVM.greenScore.subscribe(greenScore => {
            setGreenScore(greenScore)
        })
        AppVM.blueScore.subscribe(blueScore => {
            setBlueScore(blueScore)
        })
    })

    return (
        <StyledScorePanel>
            <span>{greenScore} [GREEN]</span>
            <span>{blueScore} [BLUE]</span>
        </StyledScorePanel>
    )
}
