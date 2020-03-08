import styled from 'styled-components'

export const StyledHeaderGrid = styled.div`
    width: 100%;
    display: grid;
    background-color: silver;

    p {
        color: #011b56;
        margin: 10px;
    }

    @media only screen and (max-width: 400px) {
        grid-template-rows: auto auto;

        p {
            font-size: 12px;
            justify-self: center;
        }
    }

    @media only screen and (min-width: 401px) {
        grid-template-columns: 1fr max-content;

        p {
            font-size: 14px;
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
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1600px) {
        p {
            font-size: 30px;
        }
    }
`
