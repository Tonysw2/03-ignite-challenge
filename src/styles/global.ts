import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`
