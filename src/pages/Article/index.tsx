import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import { LO, useLanguage } from 'contexts/LanguageContext'
import { AnchorsType } from 'components/Navbar'
import { ArticleItem } from 'types'
import textDataPt from './textData-PT'
import textDataEs from './textData-ES'
import textDataEn from './textData-EN'
import { anchorsArticlePT, anchorsArticleES, anchorsArticleEN } from './anchors'

import { checkStepperPosition } from './checkStepperPosition'

type TextDataType = {
  [key: string]: Array<ArticleItem>
}

const ANCHORS: AnchorsType = {
  pt: anchorsArticlePT,
  en: anchorsArticleEN,
  es: anchorsArticleES,
}

const TEXT: TextDataType = {
  pt: textDataPt,
  es: textDataEs,
  en: textDataEn,
}

const HEADER_TITLE: LO = {
  pt: 'Caderno de atividades',
  es: 'Libro de actividades',
  en: 'Activities notebook',
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
