/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import articleJS from '../../assets/article'
import Title1 from '../../components/Title1'
import Title2 from '../../components/Title2'
import Title3 from '../../components/Title3'
import ItemList from '../../components/ItemList'
import Paragraph from '../../components/Paragraph'
import * as S from './styles'
import Line from '../../components/Line'

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
  const MAXLENGHT = 500

  const featchPages = () => {
    // let count = 0
    const meuArray: Array<Props> = []

    for (let i = 0; i <= articleJS.length; i += 1) {
      if (articleJS[i].text.length <= MAXLENGHT) {
        // count += articleJS[i].text.length
        meuArray.push(articleJS[i])
        console.log(meuArray)
      }
      break
    }
    return setArticle(meuArray)
  }

  // console.log(article[0])

  useEffect(() => {
    featchPages()
  }, [])

  return (
    <S.Container>
      {article.map((line, index: number) => {
        if (line.flags.includes('space'))
          return (
            <>
              <div key={index}>
                {line.text}
                <br />
              </div>

              <div key={index}>
                <br />
              </div>
            </>
          )
        if (line.flags.includes('line')) return <Line key={index}>{}</Line>
        if (line.flags.includes('title1'))
          return <Title1 key={index}>{line.text}</Title1>
        if (line.flags.includes('title2'))
          return <Title2 key={index}>{line.text}</Title2>
        // if (line.flags.includes('title3'))
        //   return <Title3 key={index}>{line.text}</Title3>
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
    </S.Container>
  )
}
