import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    max-height:100vh;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    /* background: ${(props) => props.theme.colors.background}; */
    background:  #212728;
    font-family: sans-serif;
    display: flex;
    align-items: center;
  }
`
