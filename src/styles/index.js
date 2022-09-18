import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { colors, space } from './var'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
  }

 *,
 *::before,
 *::after {
    box-sizing: inherit;
  }
 
#root {
  max-width: 2000px;
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

h1, h2, h3, h4 {
  font-family: 'Syne', sans-serif;
}

p, label {
  font-family: 'Montserrat', sans-serif;
}

button {
  border: 1px solid transparent;
  padding: ${space.pad};
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