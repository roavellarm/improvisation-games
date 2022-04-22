import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { LanguageProvider } from 'contexts/LanguageContext'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import Routes from './Routes'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LanguageProvider>
      <Routes />
      <GlobalStyles />
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
