import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import gameList from '../../assets/texts/games'
import CarousselNavBar from '../CarouselNavBar'
import * as S from './styles'

interface Props {
  isGamePage?: boolean
}

export default function Navbar({ isGamePage = false }: Props) {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <S.Navbar>
      <S.Line />
      <S.Container isGamePage={isGamePage}>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer>
          {isGamePage && windowWith > 700 && (
            <CarousselNavBar gameList={gameList} />
          )}
        </S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.Navbar>
  )
}

Navbar.defaultProps = {
  isGamePage: false,
}
