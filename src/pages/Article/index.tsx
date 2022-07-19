import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import { useLanguage } from 'contexts/LanguageContext'
import textDataPt from './textData-PT'
import textDataEs from './textData-ES'
import { anchors } from './anchors'

import { checkStepperPosition } from './checkStepperPosition'

// const ARTICLE_LIST: any = {
//   pt: textDataPt,
//   en: textDataEs,
// }

export default function Article() {
  const { language } = useLanguage()

  function getSelectedGame() {
    if (language === 'pt') return textDataPt
    if (language === 'es') return textDataEs

    return textDataPt
  }

  return (
    <ArticleLayout
      headerTitle="Caderno de atividades"
      textData={getSelectedGame()}
      anchors={anchors}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
