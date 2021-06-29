import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { ArticleItem } from 'types'
import HeaderTitle from 'components/HeaderTitle'
import ItemList from 'components/ItemList'
import Navbar from 'components/Navbar'
import Paragraph from 'components/Paragraph'
import ScrollToTopButton from 'components/ScrollToTopButton'
import SubTitle from 'components/SubTitle'
import Title from 'components/Title'
import Line from 'components/Line'
import Stepper from 'components/Stepper'
import * as S from './styles'

interface ArticleProps {
  currentPage?: string
  headerTitle: string
  textData: ArticleItem[]
  anchors: string[]
  checkStepperPosition(number: number): number // eslint-disable-line
}

const ArticleLayout = ({
  currentPage = 'articlePage',
  textData,
  headerTitle,
  anchors,
  checkStepperPosition,
}: ArticleProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [selectedStep, setSelectedStep] = useState(0)

  const isDesktopScreen = useMemo(() => {
    return windowWidth > 800 && windowHeight > 645
  }, [windowHeight, windowWidth])

  const getVerticalScrollPercentage = (elm: any) => {
    const p = elm.parentNode
    const result = ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    return Math.round(result)
  }

  const handleScrollPosition = useCallback(() => {
    const scrollPosition = getVerticalScrollPercentage(document.body)
    const selectedStepper = checkStepperPosition(scrollPosition)
    setSelectedStep(selectedStepper)
  }, [checkStepperPosition])

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition)
    return () => window.removeEventListener('scroll', handleScrollPosition)
  }, [handleScrollPosition])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  return (
    <>
      <Navbar currentPage={currentPage} />
      <S.Container>
        <S.SideArea stepper>
          {isDesktopScreen && <Stepper anchors={anchors} selectedStep={selectedStep} />}
        </S.SideArea>

        <S.Content>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          {textData.map((item: ArticleItem, index) => {
            if (item.style.includes('title1'))
              return (
                <Title key={index} anchor={item.style.includes('anchor')}>
                  {item.text}
                </Title>
              )

            if (item.style.includes('title2'))
              return (
                <SubTitle size={25} anchor={item.style.includes('anchor')} key={index}>
                  {item.text}
                </SubTitle>
              )

            if (item.style.includes('paragraph'))
              return (
                <Paragraph
                  key={index}
                  anchor={item.style.includes('anchor')}
                  italic={item.style.includes('italic')}
                  margin={item.style.includes('margin')}
                  bold={item.style.includes('bold')}
                  citation={item.style.includes('citation')}
                >
                  {item.text}
                </Paragraph>
              )

            if (item.style.includes('itemList')) return <ItemList key={index}>{item.text}</ItemList>

            if (item.style.includes('line')) return <Line key={index} />

            if (item.style.includes('space')) return <br key={index} />

            if (item.style.includes('bibliography')) {
              return (
                <Paragraph key={index}>
                  {item.text}
                  <strong>{item.titleStrong}</strong>
                  {item.rest}
                </Paragraph>
              )
            }

            return null
          })}
        </S.Content>

        <S.SideArea>
          <S.Image />
          <ScrollToTopButton />
        </S.SideArea>
      </S.Container>
    </>
  )
}

ArticleLayout.defaultProps = {
  currentPage: 'articlePage',
}

export default ArticleLayout
