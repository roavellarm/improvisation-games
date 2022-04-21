/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'

interface ContextData {
  language: String
  setLanguage: Object
  useLanguage: any
}

export const LanguageContext = createContext<ContextData>({} as ContextData)

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('portuguese')

  const useLanguage = useContext(LanguageContext)

  return (
    <LanguageContext.Provider value={{ language, useLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
