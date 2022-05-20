import React, { useCallback, useEffect, useMemo, useState } from 'react'
import dissertation from 'assets/texts/DissertacaoMartaMacedoBrietzke.pdf'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import { useLanguage } from 'contexts/LanguageContext'
import { Item } from 'types'
import { textPt, textEn, textEs } from './textData'
import { Link, Picture } from '../styles'

const TEXT: any = {
  pt: textPt,
  en: textEn,
  es: textEs,
}

export default function SectionKnowledge() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { language } = useLanguage()

  const isMobileScreen = useMemo(() => windowWidth <= 500, [windowWidth])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  const TEXT_LINK: any = {
    pt: ['Minha', 'dissertação', 'está disponível', 'aqui'],
    en: ['My', 'dissertation', 'is available', 'here'],
    es: ['Mi', 'disertación', 'está disponible', 'aqui'],
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

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
        if (item.style.includes('picture')) return <Picture key={index} isMobile={isMobileScreen} />
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
