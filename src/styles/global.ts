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
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
    max-height:100vh;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    /* background: ${(props) => props.theme.colors.background}; */
    /* background:  #212728; */
    font-family: sans-serif;
    display: flex;
    align-items: center;
  }
`
