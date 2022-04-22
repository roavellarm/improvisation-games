import React, { createContext, useContext, useState } from 'react'

interface ContextData {
  language: string
  selectLanguage(language: string): void // eslint-disable-line
}

const LanguageContext = createContext<ContextData>({} as ContextData)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const LANGUAGE_OPTIONS = {
    pt: 'pt',
    en: 'en',
    es: 'es',
  }

  const [language, setLanguage] = useState(LANGUAGE_OPTIONS.pt)

  const selectLanguage = (lang: string) => setLanguage(lang)

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
