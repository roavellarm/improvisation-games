import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import textData from './textData'
import { anchors } from './anchors'
import { checkStepperPosition } from './checkStepperPosition'

export default function Article() {
  return (
    <ArticleLayout
      headerTitle="Caderno de atividades"
      textData={textData}
      anchors={anchors}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
