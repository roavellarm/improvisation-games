import React, { memo } from 'react'
import * as S from './styles'

function ScrollToTopButton() {
  const scrooToTop = () => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <S.Wrapper onClick={() => scrooToTop()}>
      <S.Text>Topo</S.Text>
      <S.Button>{`<`}</S.Button>
    </S.Wrapper>
  )
}

export default memo(ScrollToTopButton)
