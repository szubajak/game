import styled from 'styled-components'
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from '@material-ui/core'

export const StyledRulesExpansionPanel = styled(ExpansionPanel)`
    && {
        width: 100%;
        background-color: #e0ebeb;
        align-items: stretch;
        box-shadow: none;
    }
`

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
    p {
        flex-grow: 1;
        flex-shrink: 1;
        color: black;
        align-self: center;
        font-size: 1.6vw;
    }

    .header {
        text-align: right;
    }
`

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
    && {
        width: 100%;
        align-items: stretch;
        flex-wrap: wrap;
    }

    h5,
    h6 {
        flex: 1 0 100%;
        margin: 4px 0;
    }

    h5 {
        color: lightblue;
    }

    h6 {
        color: white;
    }

    p {
    }
`
