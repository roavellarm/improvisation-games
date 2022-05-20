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

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  const handleRenderLink = () => {
    if (language === 'pt')
      return (
        <>
          Minha <strong>dissertação</strong> está disponível
          <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
            aqui
          </Link>
          .
        </>
      )
    if (language === 'en')
      return (
        <>
          Mine <strong>dissertação</strong> está disponível
          <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
            aqui
          </Link>
          .
        </>
      )
    if (language === 'es')
      return (
        <>
          Mi <strong>dissertación</strong> está disponíble
          <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
            aqui
          </Link>
          .
        </>
      )
    return undefined
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
        if (item.style.includes('picture')) return <Picture key={index} isMobile={isMobileScreen} />
        return null
      })}

      <Paragraph>{handleRenderLink()}</Paragraph>
      <br />
    </>
  )
}
