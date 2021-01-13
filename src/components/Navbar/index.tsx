import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import gameList from '../../assets/texts/games'
import CarousselNavbar from '../CarouselNavbar'
import * as S from './styles'

export type NavbarProps = {
  isGamePage?: boolean
}

export default function Navbar({ isGamePage }: NavbarProps) {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  const handleGamePage = useMemo(() => {
    return isGamePage && windowWith > 700
  }, [isGamePage, windowWith])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <S.StyledNavbar>
      <S.Line />
      <S.Container isGamePage={isGamePage}>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer>
          {handleGamePage && <CarousselNavbar gameList={gameList} />}
        </S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.StyledNavbar>
  )
}

Navbar.defaultProps = {
  isGamePage: false,
}
