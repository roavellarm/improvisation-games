import React, { useEffect, useState } from 'react'
import * as C from '../../components'
import article from '../../assets/texts/article'
import * as S from './styles'
import { anchors } from './anchors'

export default function Article() {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <>
      <C.Navbar />
      <S.Container>
        <S.SideArea stepper>
          {windowWith > 800 && (
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
              return <C.Title key={index}>{item.text}</C.Title>

            if (item.flags.includes('title2'))
              return (
                <C.SubTitle size={25} key={index}>
                  {item.text}
                </C.SubTitle>
              )

            if (
              item.flags.includes('paragraph') &&
              item.flags.includes('margin')
            )
              return (
                <C.Paragraph margin key={index}>
                  {item.text}
                </C.Paragraph>
              )

            if (item.flags.includes('paragraph'))
              return <C.Paragraph key={index}>{item.text}</C.Paragraph>

            if (item.flags.includes('bold'))
              return (
                <C.Paragraph bold key={index}>
                  {item.text}
                </C.Paragraph>
              )

            if (item.flags.includes('italic') && item.flags.includes('margin'))
              return (
                <C.Paragraph italic key={index}>
                  {item.text}
                </C.Paragraph>
              )

            if (item.flags.includes('italic'))
              return (
                <C.Paragraph italic key={index}>
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

            return (
              <C.Paragraph citation key={index}>
                {`> `}
                {item.text}
              </C.Paragraph>
            )
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
