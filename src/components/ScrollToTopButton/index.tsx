import React, { memo } from 'react'
import * as S from './styles'

function ScrollToTopButton() {
  return (
    <S.Wrapper onClick={() => window.scrollTo({ top: 0 })}>
      <S.Text>Topo</S.Text>
      <S.Button>{`<`}</S.Button>
    </S.Wrapper>
  )
}

export default memo(ScrollToTopButton)
