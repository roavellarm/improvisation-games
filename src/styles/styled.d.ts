import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      text: string
      greenDark: string
      greenLight: string
      orange: string
    }

    fontFamily: {
      caveat: string
      lato: string
    }

    fontSize: {
      title1: string
      title2: string
      title3: string
      text: string
      link: string
      buttonText: string
    }
  }
}
