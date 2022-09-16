import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { colors } from './var'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
#root {
  max-width: 1280px;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  // color-scheme: light dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  color: #fff;
}

body{
  background-color: ${colors.background};
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border: 1px solid transparent;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.25s;

  &:focus{
    outline: 2px solid ${colors.primaryOpacity};
  }
}


/* @media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  button {
    background-color: #f9f9f9;
  }
} */

`