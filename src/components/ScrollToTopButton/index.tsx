import React, { memo } from 'react'

import { useLanguage } from 'contexts/LanguageContext'
import * as S from './styles'

function ScrollToTopButton() {
  const scrooToTop = () => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const { language } = useLanguage()

  const TEXT: any = {
    pt: 'Topo',
    en: 'Top',
    es: 'Arriba',
  }

  return (
    <S.Wrapper onClick={() => scrooToTop()}>
      <S.Text>{TEXT[language]}</S.Text>
      <S.Button>{`<`}</S.Button>
    </S.Wrapper>
  )
}

export default memo(ScrollToTopButton)
