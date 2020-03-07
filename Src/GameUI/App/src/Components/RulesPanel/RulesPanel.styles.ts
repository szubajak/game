import styled from 'styled-components'
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Box,
} from '@material-ui/core'
import { FontColor } from '~/Core/Models'

export const StyledRulesExpansionPanel = styled(ExpansionPanel)`
    && {
        width: 100%;
        background-color: silver;
        align-items: stretch;
        box-shadow: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border: 20px 0 0 0;
    }
`

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
    && {
        width: 100%;
    }

    div {
        justify-content: space-evenly;
        align-items: stretch;
    }
`

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
    && {
        width: 100%;
        align-items: stretch;
        flex-wrap: wrap;
    }
`

export const StyledIcons = styled(Box)`
    text-align: left;
    flex: 1 1 30%;
`

export const StyledIconText = styled.span`
    color: ${(props: FontColor): string => props.fontcolor};
    font-size: 20px;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`

export const StyledStatusText = styled(Typography)`
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    color: darkblue;
    flex: 1 1 30%;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`

export const StyledText = styled(Typography)`
    user-select: none;
    font-size: 20px;
    color: darkblue;
    text-align: right;
    flex: 1 1 30%;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`
