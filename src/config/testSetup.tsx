import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export const setTestComponent = (Component: ReactNode) => (
  <ThemeProvider theme={theme}>{Component}</ThemeProvider>
)
