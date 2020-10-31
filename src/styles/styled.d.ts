import 'styled-components'

declare module '*.png'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    fontWeight: {
      light: number
      regular: number
      bold: number
      black: number
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    colors: {
      text: string
      background: string
    }
  }
}
