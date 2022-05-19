import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import { useLanguage } from 'contexts/LanguageContext'
import { quarantineGamesTextPt } from './textPt'
import { quarantineGamesTextEn } from './textEn'
import { quarantineGamesTextEs } from './textEs'
import { quarentineAnchors } from './anchors'
import { checkStepperPosition } from './checkStepperPosition'

export default function QuarantineGames() {
  const { language } = useLanguage()

  const TEXT: any = {
    pt: quarantineGamesTextPt,
    es: quarantineGamesTextEs,
    en: quarantineGamesTextEn,
  }
  return (
    <ArticleLayout
      currentPage="quarantineGamesPage"
      headerTitle="Sons da quarentena"
      textData={TEXT[language]}
      anchors={quarentineAnchors}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
