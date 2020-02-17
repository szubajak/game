import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`

export const LayoutStyle = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1000px auto;
    grid-template-rows: min-content auto 120px;
    background-color: #2e3e60;
`
