import React from 'react'
import ArticleLayout from 'components/Templates/ArticleLayout'
import { useLanguage } from 'contexts/LanguageContext'
import { quarantineGamesTextPt } from './textPt'
import { quarantineGamesTextEn } from './textEn'
import { quarantineGamesTextEs } from './textEs'
import { anchorsPt, anchorsEn, anchorsEs } from './anchors'
import { checkStepperPosition } from './checkStepperPosition'

export default function QuarantineGames() {
  const { language } = useLanguage()

  const ANCHORS: any = {
    pt: anchorsPt,
    en: anchorsEn,
    es: anchorsEs,
  }

  const TEXT: any = {
    pt: quarantineGamesTextPt,
    es: quarantineGamesTextEs,
    en: quarantineGamesTextEn,
  }

  const HEADER_TITLE: any = {
    pt: 'Sons da Quarenta',
    es: 'Sonidos de la cuarentena',
    en: 'Quarentine Sounds',
  }

  return (
    <ArticleLayout
      currentPage="quarantineGamesPage"
      headerTitle={HEADER_TITLE[language]}
      textData={TEXT[language]}
      anchors={ANCHORS[language]}
      checkStepperPosition={checkStepperPosition}
    />
  )
}
