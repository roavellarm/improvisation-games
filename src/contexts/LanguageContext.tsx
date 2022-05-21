import React, { createContext, useCallback, useContext, useState } from 'react'

export type LanguageOptions = 'pt' | 'en' | 'es' | string
interface ContextData {
  language: LanguageOptions
  selectLanguage(lang: LanguageOptions): void // eslint-disable-line
}

const LanguageContext = createContext<ContextData>({} as ContextData)

export type LO = {
  [key: string]: string
}

const LANGUAGE_OPTIONS = {
  pt: 'pt',
  en: 'en',
  es: 'es',
} as LO

const KEY = 'JOGOS_CELLO-language'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageOptions>(
    window.localStorage.getItem(KEY) || 'pt'
  )

  const selectLanguage = useCallback((lang: LanguageOptions) => {
    if (!LANGUAGE_OPTIONS[lang]) return null
    window.localStorage.setItem(KEY, LANGUAGE_OPTIONS[lang])
    return setLanguage(LANGUAGE_OPTIONS[lang])
  }, [])

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
