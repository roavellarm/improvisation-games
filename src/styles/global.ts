import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    height: 100vh;
    width: 100vw;
    max-width: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`
