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

  function getSelectedLanguage() {
    if (language === 'pt') return textDataPt
    if (language === 'es') return textDataEs

    return textDataPt
  }

  function getSelectedLanguageheaderTitle() {
    if (language === 'pt') return `Caderno de atividades`
    if (language === 'es') return `Libro de actividades`

    return `Caderno de atividades`
  }

  return (
    <ArticleLayout
      headerTitle={getSelectedLanguageheaderTitle()}
      textData={getSelectedLanguage()}
      anchors={anchors}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
