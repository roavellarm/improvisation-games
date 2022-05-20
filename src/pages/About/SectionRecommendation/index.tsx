import React from 'react'

import Paragraph from 'components/Paragraph'
import openQuote from 'assets/images/openQuote.png'
import closeQuote from 'assets/images/closeQuote.png'
import { useLanguage } from 'contexts/LanguageContext'
import { textPt, textEn, textEs } from './textData'
import { CitationContainer, QuoteImage, Citation, CloseQuoteContainer, Signature } from '../styles'

const TEXT: any = {
  pt: textPt,
  en: textEn,
  es: textEs,
}

export default function SectionRecommendation() {
  const { language } = useLanguage()
  return (
    <>
      <CitationContainer>
        <QuoteImage src={openQuote} alt="open quote" isOpenQuote />
        <Citation>
          <Paragraph italic>{TEXT[language]}</Paragraph>
        </Citation>
        <CloseQuoteContainer>
          <QuoteImage src={closeQuote} alt="close quote" />
        </CloseQuoteContainer>
      </CitationContainer>
      <Signature>Carlos Kater</Signature>
    </>
  )
}
