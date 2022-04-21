/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

interface ContextData {
  language: String
  setLanguage: Object
}

export const LanguageContext = createContext<ContextData>({} as ContextData)
// eslint-disable-next-line react-hooks/rules-of-hooks

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('portuguese')
  // const useLanguage = useContext(LanguageContext)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
