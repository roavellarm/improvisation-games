/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import articleJS from '../../assets/article'
import Title1 from '../../components/Title1'
import Title2 from '../../components/Title2'
import Title3 from '../../components/Title3'
import ItemList from '../../components/ItemList'
import Line from '../../components/Line'
import Paragraph from '../../components/Paragraph'

const Container = styled.div``

// title1(strong),
// title2,
// title3(strong), title3Italic (sem strong)
// strong, italic
// paragraph
// itemList(italic)
// space
// bibliography

interface Props {
  text: string
  flags: Array<string>
  titleStrong?: string | undefined
  rest?: string | undefined
}

export default function Article() {
  const [article, setArticle] = useState<Array<Props>>([])
  // const [counter, setCounter] = useState(0)
  // const [pages, setPages] = useState([])
  const MAXLENGHT = 1000

  const featchPages = () => {
    let count = 0
    const meuArray: Array<Props> = []
    let i = 0
    for (i = 0; i <= articleJS.length; i += 1) {
      if (!(articleJS[i].text.length + count >= MAXLENGHT)) {
        count += articleJS[i].text.length
        meuArray.push(articleJS[i])
      }
      break
    }
    return setArticle(meuArray)
  }

  useEffect(() => {
    featchPages()
  }, [])

  return (
    <Container>
      {article.map((line, index: number) => {
        if (line.flags.includes('space'))
          return (
            <div key={index}>
              <br />
            </div>
          )
        if (line.flags.includes('line')) return <Line key={index} />
        if (line.flags.includes('title1'))
          return <Title1 key={index}>{line.text}</Title1>
        if (line.flags.includes('title2'))
          return <Title2 key={index}>{line.text}</Title2>
        if (line.flags.includes('title3'))
          return <Title3 key={index}>{line.text}</Title3>
        if (line.flags.includes('itemList'))
          return <ItemList key={index}>{line.text}</ItemList>
        // if (line.flags.includes('bibliography')) {
        //   return (
        //     <Biography
        //       key={index}
        //       text={line.text}
        //       titleStrong={line.titleStrong}
        //       rest={line.rest}
        //     />
        //   )
        // }
        if (line.flags.includes('citation'))
          return <Paragraph key={index}>{line.text}</Paragraph>
        // return <Citation key={index}>{line.text}</Citation>
        if (line.flags.includes('title3Italic'))
          return <Title3 key={index}>{line.text}</Title3>
        // return <Title3Italic key={index}>{line.text}</Title3Italic>
        if (line.flags.includes('paragraph')) {
          return (
            <Paragraph
              key={index}
              bold={line.flags.includes('strong')}
              italic={line.flags.includes('italic')}
            >
              {line.text}
            </Paragraph>
          )
        }

        return null
      })}
    </Container>
  )
}
