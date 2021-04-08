import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
}

body {
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(91, 124, 107, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(91, 124, 107, 0.4);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(91, 124, 107, 1);
}
`
