import React, { useEffect, useState } from 'react'
import * as C from '../../components'
import article from '../../assets/texts/article'
import * as S from './styles'
import { anchors } from './anchors'
import { checkStepperPosition } from './checkStepperPosition'

interface StateProps {
  windowWidth: number
  windowHeight: number
  isSelected: { index: number }
}

export default function Article() {
  const [state, setState] = useState<StateProps>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    isSelected: { index: 0 },
  })

  function getVerticalScrollPercentage(elm: any) {
    const p = elm.parentNode
    const result =
      ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    return Math.round(result)
  }

  const handleWindowResize = () =>
    window.addEventListener('resize', () => {
      setState({
        ...state,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    })

  const handleScrollPosition = () =>
    window.addEventListener('scroll', () => {
      const scrollPosition = getVerticalScrollPercentage(document.body)
      const selectedStepper = checkStepperPosition(scrollPosition)
      setState({ ...state, isSelected: selectedStepper })
    })

  useEffect(() => {
    handleScrollPosition()
    return () => {
      handleScrollPosition()
    }
  }, [window.scrollY])

  useEffect(() => {
    handleWindowResize()
    return () => {
      handleWindowResize()
    }
  }, [window.scrollY])

  return (
    <>
      <C.Navbar />
      <S.Container>
        <S.SideArea stepper>
          {state.windowWidth > 800 && state.windowHeight > 645 && (
            <S.Stepper>
              {anchors.map((anchor: string, index: number) => {
                return (
                  <a
                    key={index}
                    href={`#${anchor}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <C.StepperItem
                      isSelected={state.isSelected.index === index}
                    >
                      {anchor}
                    </C.StepperItem>
                  </a>
                )
              })}
            </S.Stepper>
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
