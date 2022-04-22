import React, { createContext, useContext, useState } from 'react'

interface ContextData {
  language: string
  selectPortuguese(): void
  selectEnglish(): void
  selectSpanish(): void
}

const LanguageContext = createContext<ContextData>({} as ContextData)

const LANGUAGE_OPTIONS = {
  pt: 'pt',
  en: 'en',
  es: 'es',
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS.pt)
  const selectPortuguese = () => setLanguage(LANGUAGE_OPTIONS.pt)
  const selectEnglish = () => setLanguage(LANGUAGE_OPTIONS.en)
  const selectSpanish = () => setLanguage(LANGUAGE_OPTIONS.es)

  return (
    <LanguageContext.Provider value={{ language, selectPortuguese, selectEnglish, selectSpanish }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
