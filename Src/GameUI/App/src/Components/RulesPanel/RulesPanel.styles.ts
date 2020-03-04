import styled from 'styled-components'
import { ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core'

export const StyledRulesPanel = styled(ExpansionPanel)`
    && {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        width: 100%;
        background-color: #2e3e60;
        align-items: stretch;
    }

    div {
        p {
            flex-grow: 1;
            flex-shrink: 1;
            color: white;
            align-self: center;
        }

        .header {
            font-size: medium;
            text-align: right;
        }

        .icons {
            align-self: center;
            font-size: xx-large;
        }
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
