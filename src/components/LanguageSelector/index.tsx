import React, { useState } from 'react'
import { useLanguage } from 'contexts/LanguageContext'
import globeIcon from 'assets/images/globe-icon.svg'
import ptIcon from 'assets/images/pt-icon.png'
import enIcon from 'assets/images/en-icon.png'
import esIcon from 'assets/images/es-icon.png'
import { Wrapper, Button, DropdownContent, Options, Arrow } from './styles'

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const { language, selectLanguage } = useLanguage()

  const languages = [
    { key: 'pt', label: 'Português', icon: ptIcon },
    { key: 'en', label: 'English', icon: enIcon },
    { key: 'es', label: 'Español', icon: esIcon },
  ]

  const getSelectedLanguage = () => languages.filter((lang) => lang.key === language && language)[0]

  const renderCurrentLanguage = () => {
    const currentLanguage = getSelectedLanguage()
    return (
      <>
        {currentLanguage?.key.toUpperCase()}
        &nbsp;
        <img src={globeIcon} height={20} width={20} alt="Globe icon" />
        &nbsp;
        <Arrow isOpen={isOpen} />
      </>
    )
  }

  return (
    <Wrapper>
      <Button onMouseEnter={openMenu} onMouseLeave={closeMenu} isOpen={isOpen}>
        {renderCurrentLanguage()}
      </Button>

      {isOpen && (
        <DropdownContent onMouseEnter={openMenu} onMouseLeave={closeMenu}>
          {languages.map((lang) => (
            <Options key={lang.key} onClick={() => selectLanguage(lang.key || 'pt')}>
              <img src={lang.icon} height={20} width={20} alt={`${lang.label} icon`} />
              &nbsp;
              {lang.label}
            </Options>
          ))}
        </DropdownContent>
      )}
    </Wrapper>
  )
}
