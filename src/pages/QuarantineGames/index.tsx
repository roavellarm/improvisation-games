import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import quarantineGamesTextData from './textData'
import { quarentineAnchors } from './anchors'
import { checkStepperPosition } from './checkStepperPosition'

export default function QuarantineGames() {
  return (
    <ArticleLayout
      currentPage="quarantineGamesPage"
      headerTitle="Sons da quarentena"
      textData={quarantineGamesTextData}
      anchors={quarentineAnchors}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
