import styled from 'styled-components'

export const GameInterfaceStyle = styled.div`
    background-color: lightskyblue;
    margin-top: 10px;
    grid-column: 2;
    grid-row: 3;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 300px auto 300px;
    grid-template-rows: auto;
    height: 130px;

    .message {
        grid-column: 2;
        margin: auto 0;
        text-align: center;

        span {
            font-size: 24px;
            color: darkblue;
        }
    }
    .button {
        grid-column: 3;
        margin: auto 20px auto auto;
        button {
            padding: 12px 24px;
            background-color: blue;
            color: white;
            border: 2px solid white;
            font-size: 14pt;
            border-radius: 10px;
        }
    }
`
