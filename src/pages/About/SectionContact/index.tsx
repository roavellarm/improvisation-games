import React from 'react'

import { useLanguage } from 'contexts/LanguageContext'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import ItemList from 'components/ItemList'
import contacts from 'helpers/contacts'
import Youtube from '../../../assets/youtube.png'
import Instagram from '../../../assets/instagram.png'

import { TEXT, SUBJECT, BODY } from './textData'
import { Link } from '../styles'

export default function SectionContact() {
  const { gustavo, marta, rodrigo } = contacts
  const { language } = useLanguage()

  return (
    <>
      <HeaderTitle isAboutPage>{TEXT[language][0]}</HeaderTitle>

      <Paragraph>{TEXT[language][1]}</Paragraph>

      <Title>
        {`${TEXT[language][2]} `}
        <Link
          target="_blank"
          href={`mailto:${marta}?subject=${SUBJECT[language]}&body=${BODY[language]}`}
        >
          {TEXT[language][3]}
        </Link>
      </Title>

      <Paragraph>
        <Link
          style={{ marginLeft: '30px' }}
          target="_blank"
          href="https://www.youtube.com/channel/UCEBNc5K-5fk02s8IZmP7wqQ"
        >
          <img width="50" src={Youtube} alt="yotube" />
        </Link>
        <div style={{ marginTop: '-50px', marginLeft: '168px' }}>
          <Link target="_blank" href="https://www.instagram.com/jogos_cello/?hl=pt-br">
            <img height="35" width="38" src={Instagram} alt="yotube" />
          </Link>
        </div>
      </Paragraph>

      <HeaderTitle isAboutPage>{TEXT[language][4]}</HeaderTitle>
      <ItemList>
        {`${TEXT[language][5]} `}
        <Link target="_blank" href="https://www.samantafloor.com.br/">
          Samanta Flôor
        </Link>
      </ItemList>

      <ItemList>
        {`${TEXT[language][6]} `}
        <Link
          target="_blank"
          href={`mailto:${rodrigo}?subject=${SUBJECT[language]}&body=${BODY[language]}`}
        >
          Rodrigo Avellar de Muniaguria
        </Link>
      </ItemList>

      <ItemList>
        {`${TEXT[language][7]} `}
        <Link
          target="_blank"
          href={`mailto:${gustavo}?subject=${SUBJECT[language]}&body=${BODY[language]}`}
        >
          Gustavo Sohne
        </Link>
      </ItemList>
    </>
  )
}
