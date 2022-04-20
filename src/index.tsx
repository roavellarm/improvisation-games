import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { LanguageContextProvider } from 'Contexts/LanguageContext'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import Routes from './Routes'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LanguageContextProvider>
      <Routes />
      <GlobalStyles />
    </LanguageContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
