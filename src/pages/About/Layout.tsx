import React, { ReactNode, useEffect } from 'react'

import Navbar from 'components/Navbar'
import { useScreenSize } from 'contexts/screenSize'
import { Container, SideArea, Content, ImgTopRight, ImgBottomLeft, ImgBottomRight } from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { isMobile } = useScreenSize()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <SideArea>{!isMobile && <ImgBottomLeft />}</SideArea>

        <Content>{children}</Content>

        <SideArea>
          <ImgTopRight />
          {!isMobile && <ImgBottomRight />}
        </SideArea>
      </Container>
    </>
  )
}
