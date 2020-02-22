import styled from 'styled-components'
import Card from '@material-ui/core/Card'

interface StyledGameCardProps {
    color: string
    borderColor: string
}

export const StyledGameCard = styled(Card)`
    text-align: center;
    color: ${(props: StyledGameCardProps): string => props.color};
    border: 3px solid
        ${(props: StyledGameCardProps): string => props.borderColor};
    margin: 20px 5px;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 120px;

    justify-content: space-evenly;
    user-select: none;
    overflow: hidden;
`
