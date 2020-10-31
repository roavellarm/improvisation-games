import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root')
)
