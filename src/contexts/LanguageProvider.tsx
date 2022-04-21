/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'

interface ContextData {
  language: String
  setLanguage: Object
}

export const LanguageContext = createContext<ContextData>({} as ContextData)

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('portuguese')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const useLanguage = useContext(LanguageContext)
  return useLanguage
}
