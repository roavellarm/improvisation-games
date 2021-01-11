import React, { useEffect, useState } from 'react'
import * as C from '../../components'
import article from '../../assets/texts/article'
import * as S from './styles'
import { anchors } from './anchors'

export default function Article() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    })
  }, [])

  return (
    <>
      <C.Navbar />
      <S.Container>
        <S.SideArea stepper>
          {windowWidth > 800 && windowHeight > 645 && (
            <S.Stepper>
              {anchors.map((anchor: string) => (
                <a href={`#${anchor}`} style={{ textDecoration: 'none' }}>
                  <C.StepperItem key={anchor}>{anchor}</C.StepperItem>
                </a>
              ))}
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

            if (item.flags.includes('line')) return <C.Line />

            if (item.flags.includes('space')) return <br />

            if (item.flags.includes('bibliography')) {
              return (
                <C.Paragraph>
                  {item.text}
                  <strong>{item.titleStrong}</strong>
                  {item.rest}
                </C.Paragraph>
              )
            }

            return <div>!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
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
