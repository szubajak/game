import * as React from 'react'
import { StyledStatePanel, StyledInfoMessage } from './StatePanel.style'
import { AppVM } from '~Core/AppViewModel'

export const StatePanelComponent: React.FunctionComponent = () => {
    const [status, setStatus] = React.useState('game is not started')

    React.useEffect(() => {
        AppVM.gameEngine.status.subscribe(newStatus => {
            setStatus(newStatus)
        })
    })

    return (
        <StyledStatePanel>
            <StyledInfoMessage>{status}</StyledInfoMessage>
        </StyledStatePanel>
    )
}
