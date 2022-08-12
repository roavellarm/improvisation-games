import React from 'react'

import { LO, useLanguage } from 'contexts/LanguageContext'
import { Container, StyledText } from './styles'

export default function NotFound() {
  const { language } = useLanguage()

  const TEXT: LO = {
    pt: 'PÁGINA INEXISTENTE',
    en: 'PAGE NOT FOUND',
    es: 'PAGINA NO ENCONTRADA',
  }

  return (
    <Container>
      <StyledText>{TEXT[language]}</StyledText>
    </Container>
  )
}
