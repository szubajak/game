import styled from 'styled-components'

export const StyledHeaderGrid = styled.div`
    width: 100%;
    display: grid;
    background-color: silver;

    p {
        color: black;
        margin: 10px;
    }

    @media only screen and (max-width: 400px) {
        grid-template-rows: min-content min-content;

        p {
            font-size: 5vw;
            justify-self: center;
        }
    }

    @media only screen and (min-width: 401px) {
        grid-template-columns: 1fr 1fr;

        p {
            font-size: 4vw;
        }

        .app-name {
            justify-self: start;
        }

        .logo {
            justify-self: end;
        }
    }

    @media only screen and (min-width: 1000px) {
        p {
            font-size: 3vw;
        }
    }

    @media only screen and (min-width: 1600px) {
        p {
            font-size: 30px;
        }
    }
`
