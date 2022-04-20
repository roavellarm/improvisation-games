/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

interface ContextData {
  state: Object
  setState: Object
  onChangeLanguage: () => void
}

export const LanguageContext = createContext<ContextData>({} as ContextData)
// eslint-disable-next-line react-hooks/rules-of-hooks

export const LanguageContextProvider: React.FC = ({ children }) => {
  const initialState = {
    language: 'pt-BR',
    headerTitle: 'Reconhecimento de voz',
    startButton: 'Começar',
    stopButton: 'Parar',
    clearButton: 'Limpar',
    fieldTitle: 'Transcrição',
  }
  const [state, setState] = useState(initialState)
  // const useLanguage = useContext(LanguageContext)

  const onChangeLanguage = () => {
    if (state.language !== 'pt-BR') return setState(initialState)

    return setState({
      language: 'en-US',
      headerTitle: 'Speech recognition',
      startButton: 'Start',
      stopButton: 'Stop',
      clearButton: 'Clear',
      fieldTitle: 'Transcription',
    })
  }

  return (
    <LanguageContext.Provider value={{ state, setState, onChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
