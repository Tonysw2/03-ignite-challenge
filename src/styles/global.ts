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

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-900']}
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    
    background: #00875F60;
    border-radius: 999px;
  
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00875F;
    
  }
`
