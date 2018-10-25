import palx from 'palx'
import { createGlobalStyle, keyframes } from 'styled-components'

const palxColors = palx('#01C5FF')
const colors = {
  primary: '#01C5FF',
  ...palxColors,
}

const fonts = {
  primary: `Klima, 'Roboto', -apple-system, sans-serif`,
}
const fontSizes = {
  big: '3.5rem',
  medium: '2rem',
  mediumSmall: '1.8rem',
  small: '1.5rem',
  mediumBig: '2.4rem',
}
const mediaQueries = {
  sm: '@media (max-width: 32em)',
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  mediaQueries,
}

const pulse = keyframes`
  0% { background-color: ${colors.blue[7]}; }
  33% { background-color: ${colors.fuschia[7]}; }
  66% { background-color: ${colors.violet[7]}; }
  100% { background-color: ${colors.blue[7]}; }
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: ${fonts.primary};

    background-color: ${colors.blue[5]};
    background-image: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1),
      rgba(0, 255, 255, 1)
    );
    background-blend-mode: overlay;
    animation: ${pulse} 16s linear infinite;
  }
`
