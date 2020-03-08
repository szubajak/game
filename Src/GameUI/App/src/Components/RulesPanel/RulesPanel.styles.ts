import styled from 'styled-components'
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Link,
} from '@material-ui/core'
import { FontColor } from '~/Core/Models'

export const StyledRulesExpansionPanel = styled(ExpansionPanel)`
    && {
        width: 100%;
        background-color: silver;
        align-items: stretch;
        box-shadow: none;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
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

export const StyledStatus = styled(Typography)`
    text-align: left;
    font-size: 18px;
    text-transform: uppercase;
    color: #011b56;
    flex: 1 1 50%;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`

export const StyledLabel = styled(Typography)`
    user-select: none;
    font-size: 20px;
    color: #011b56;
    text-align: right;
    flex: 1 1 30%;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`

export const StyledIcon = styled.span`
    color: ${(props: FontColor): string => props.fontcolor};
    font-size: 20px;
    margin: 4px;

    @media only screen and (max-width: 500px) {
        font-size: 14px;
    }
`

export const StyledHeader = styled(Typography)`
    font-size: 20px;
    color: #011b56;
    width: 100%;
    margin: 2px auto;

    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }
`

export const StyledLink = styled(Link)`
    font-size: 20px;
    width: 100%;

    @media only screen and (max-width: 500px) {
        font-size: 14px;
    }
`

export const StyledSubHeader = styled(Typography)`
    font-size: 16px;
    color: #0269a4;
    width: 100%;
    margin: 2px auto;

    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }
`

export const StyledText = styled(Typography)`
    font-size: 16px;
    width: 100%;

    @media only screen and (max-width: 500px) {
        font-size: 10px;
    }
`
