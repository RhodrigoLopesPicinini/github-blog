import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100vw;

        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

    h1, h2, h3 {
        color: ${(props) => props.theme['base-title']};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['brand-blue']};
    }
`
