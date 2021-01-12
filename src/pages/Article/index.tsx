import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as C from '../../components'
import article from '../../assets/texts/article'
import * as S from './styles'
import { anchors, checkStepperPosition } from '../../helpers/article'

export default function Article() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [selectedStep, setSelectedStep] = useState(0)

  const needToShowStepper = useMemo(() => {
    return windowWidth > 800 && windowHeight > 645
  }, [windowHeight, windowWidth])

  const getVerticalScrollPercentage = (elm: any) => {
    const p = elm.parentNode
    const result =
      ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    return Math.round(result)
  }

  const handleScrollPosition = useCallback(() => {
    const scrollPosition = getVerticalScrollPercentage(document.body)
    const selectedStepper = checkStepperPosition(scrollPosition)
    setSelectedStep(selectedStepper)
  }, [])

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
    return () => window.removeEventListener('scroll', handleWindowResize)
  }, [handleWindowResize])

  return (
    <>
      <C.Navbar />
      <S.Container>
        <S.SideArea stepper>
          {needToShowStepper && (
            <C.Stepper anchors={anchors} selectedStep={selectedStep} />
          )}
        </S.SideArea>

        <S.Content>
          <C.HeaderTitle>Caderno de atividades</C.HeaderTitle>
          {article.map((item, index) => {
            if (item.flags.includes('title1'))
              return (
                <C.Title key={index} anchor={item.flags.includes('anchor')}>
                  {item.text}
                </C.Title>
              )

            if (item.flags.includes('title2'))
              return (
                <C.SubTitle
                  size={25}
                  anchor={item.flags.includes('anchor')}
                  key={index}
                >
                  {item.text}
                </C.SubTitle>
              )

            if (item.flags.includes('paragraph'))
              return (
                <C.Paragraph
                  key={index}
                  anchor={item.flags.includes('anchor')}
                  italic={item.flags.includes('italic')}
                  margin={item.flags.includes('margin')}
                  bold={item.flags.includes('bold')}
                  citation={item.flags.includes('citation')}
                >
                  {item.text}
                </C.Paragraph>
              )

            if (item.flags.includes('itemList'))
              return <C.ItemList key={index}>{item.text}</C.ItemList>

            if (item.flags.includes('line')) return <C.Line key={index} />

            if (item.flags.includes('space')) return <br key={index} />

            if (item.flags.includes('bibliography')) {
              return (
                <C.Paragraph key={index}>
                  {item.text}
                  <strong>{item.titleStrong}</strong>
                  {item.rest}
                </C.Paragraph>
              )
            }

            return null
          })}
        </S.Content>

        <S.SideArea>
          <S.Image />
          <C.ScrollToTopButton />
        </S.SideArea>
      </S.Container>
    </>
  )
}
