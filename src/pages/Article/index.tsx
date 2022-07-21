import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import { useLanguage } from 'contexts/LanguageContext'
import textDataPt from './textData-PT'
import textDataEs from './textData-ES'
import textDataEn from './textData-EN'
import { anchorsArticlePT, anchorsArticleES, anchorsArticleEN } from './anchors'

import { checkStepperPosition } from './checkStepperPosition'

const ANCHORS: any = {
  pt: anchorsArticlePT,
  en: anchorsArticleEN,
  es: anchorsArticleES,
}

const TEXT: any = {
  pt: textDataPt,
  es: textDataEs,
  en: textDataEn,
}

const HEADER_TITLE: any = {
  pt: 'Caderno de atividades',
  es: 'Libro de actividades',
  en: 'Book of activities',
}

export default function Article() {
  const { language } = useLanguage()

  return (
    <ArticleLayout
      headerTitle={HEADER_TITLE[language]}
      textData={TEXT[language]}
      anchors={ANCHORS[language]}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
