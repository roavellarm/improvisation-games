import React, { createContext, ReactNode, useContext, useState } from 'react'

enum LANGUAGE_OPTIONS {
  'pt',
  'en',
  'es',
}

interface ContextData {
  language: LANGUAGE_OPTIONS
  selectLanguage(language: LANGUAGE_OPTIONS): void
}

const INITIAL_STATE = {
  language: LANGUAGE_OPTIONS.pt,
  selectLanguage: () => undefined,
}

const LanguageContext = createContext<ContextData>(INITIAL_STATE)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(INITIAL_STATE.language)

  const selectLanguage = (language: LANGUAGE_OPTIONS) => setLanguage(language)

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
