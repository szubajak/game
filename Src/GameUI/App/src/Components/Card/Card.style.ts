import styled from 'styled-components'

interface CardProps {
    color: string
}

export const CardStyle = styled.div`
    color: black;
    background-color: lightsteelblue;
    border: 2px solid ${(props: CardProps): string => props.color};
    margin: 2px;
    display: flex;
    flex-direction: column;
    flex: 1 0 11%;
    justify-content: space-evenly;
    user-select: none;

    div {
        margin: auto;
        text-align: middle;
        visibility: ${(props: CardProps): string =>
            props.color === 'lightsteelblue' ? 'hidden' : 'visible'};
    }
`
