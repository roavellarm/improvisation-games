import React from 'react'
import * as C from '../../components'
import article from '../../assets/texts/article'
import * as S from './styles'

export default function Article() {
  return (
    <>
      <C.Navbar />
      <S.Container>
        <S.SideArea />

        <S.Content>
          <C.HeaderTitle>Caderno de atividades</C.HeaderTitle>
          {article.map((item, index) => {
            if (item.flags.includes('title1'))
              return <C.Title key={index}>{item.text}</C.Title>

            if (item.flags.includes('title2'))
              return <C.SubTitle key={index}>{item.text}</C.SubTitle>

            if (item.flags.includes('paragraph'))
              return <C.Paragraph key={index}>{item.text}</C.Paragraph>

            if (item.flags.includes('itemList'))
              return <C.ItemList key={index}>{item.text}</C.ItemList>

            return <C.Paragraph key={index}>{`>>> ${item.text}`}</C.Paragraph>
          })}
        </S.Content>

        {/* {windowWith > 900 ? ( */}
        <S.SideArea>
          <S.Image />
          <C.ScrollToTopButton />
        </S.SideArea>
        {/* ) : (
          <>
            <S.Image />
            <C.ScrollToTopButton />
          </>
        )} */}
      </S.Container>
    </>
  )
}
