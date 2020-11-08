import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import articleJS from '../../assets/article'
import Title1 from '../../components/Title1'
import Title2 from '../../components/Title2'
import Title3 from '../../components/Title3'
import ItemList from '../../components/ItemList'
import Line from '../../components/Line'
import Paragraph from '../../components/Paragraph'

const Container = styled.div`
  overflow-y: scroll;
`

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
  titleStrong?: string
  rest?: string
}

export default function Article() {
  const [article, setArticle] = useState<Array<Props>>([])

  useEffect(() => {
    setArticle(articleJS)
  }, [articleJS])

  return (
    <Container>
      {article.map((line) => {
        if (line.flags.includes('space')) return <br />
        if (line.flags.includes('line')) return <Line />
        if (line.flags.includes('title1')) return <Title1>{line.text}</Title1>
        if (line.flags.includes('title2')) return <Title2>{line.text}</Title2>
        if (line.flags.includes('title3')) return <Title3>{line.text}</Title3>
        if (line.flags.includes('itemList'))
          return <ItemList>{line.text}</ItemList>
        // if (line.flags.includes('bibliography')) {
        //   return (
        //     <Biography
        //       text={line.text}
        //       titleStrong={line.titleStrong}
        //       rest={line.rest}
        //     />
        //   )
        // }
        if (line.flags.includes('citation'))
          return <Paragraph>{line.text}</Paragraph>
        // return <Citation>{line.text}</Citation>
        if (line.flags.includes('title3Italic'))
          return <Title3>{line.text}</Title3>
        // return <Title3Italic>{line.text}</Title3Italic>
        if (line.flags.includes('paragraph')) {
          return (
            <Paragraph
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
