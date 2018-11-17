import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: fallback;
        src: url('./fonts/roboto.ttf') format('ttf');
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`
