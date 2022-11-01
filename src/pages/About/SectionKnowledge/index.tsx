import React from 'react'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import { useLanguage } from 'contexts/LanguageContext'
import { Item } from 'types'
import dissertation from 'assets/texts/DissertacaoMartaMacedoBrietzke.pdf'
import picture from 'assets/images/Marta.jpg'
import { textPt, textEn, textEs } from './textData'
import { Link } from '../styles'

const TEXT: any = {
  pt: textPt,
  en: textEn,
  es: textEs,
}

export default function SectionKnowledge() {
  const { language } = useLanguage()

  const TEXT_LINK: any = {
    pt: ['Minha', 'dissertação', 'está disponível', 'aqui'],
    en: ['My', "master's thesis", 'is available', 'here'],
    es: ['Mi', 'tesina', 'está disponible', 'aquí'],
  }

  return (
    <>
      {TEXT[language].map((item: Item, index: number) => {
        if (item.style.includes('headerTitle'))
          return (
            <HeaderTitle key={index} isAboutPage>
              {item?.text || ''}
            </HeaderTitle>
          )
        if (item.style.includes('paragraph'))
          return <Paragraph key={index}>{item?.text || ''}</Paragraph>
        if (item.style.includes('title')) return <Title key={index}>{item?.text || ''}</Title>
        if (item.style.includes('picture'))
          return <img key={index} src={picture} width="100%" height="auto" alt={item.text} />
        return null
      })}

      <Paragraph>
        {`${TEXT_LINK[language][0]} `}
        <strong>{TEXT_LINK[language][1]}</strong>
        {` ${TEXT_LINK[language][2]} `}
        <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
          {TEXT_LINK[language][3]}
        </Link>
        .
      </Paragraph>
      <br />
    </>
  )
}
