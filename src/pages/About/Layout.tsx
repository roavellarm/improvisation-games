import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import loadable from 'loadable-components'
import {
  Container,
  SideArea,
  Content,
  ImgTopRight,
  ImgBottomLeft,
  ImgBottomRight,
} from './styles'

const Navbar = loadable(() => import('components/Navbar'))

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  const isDesktopScreen = useMemo(() => windowWith > 800, [windowWith])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <>
      <Navbar />
      <Container>
        <SideArea>{isDesktopScreen && <ImgBottomLeft />}</SideArea>

        <Content>{children}</Content>

        <SideArea>
          <ImgTopRight />
          {isDesktopScreen && <ImgBottomRight />}
        </SideArea>
      </Container>
    </>
  )
}
