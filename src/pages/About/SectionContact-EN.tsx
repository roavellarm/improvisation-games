import React from 'react'
import contacts from 'helpers/contacts'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import ItemList from 'components/ItemList'

import { Link } from './styles'

export default function SectionContact() {
  const { gustavo, marta, rodrigo } = contacts
  const subject = 'Contato jogoscello.com'
  const body = 'Olá! Eu sou <seu nome>...'

  return (
    <>
      <HeaderTitle isAboutPage>Write me!</HeaderTitle>
      <Paragraph>
        If you try any of the game&apos;s proposals, be sure to share it with me. It will be very
        good to know your experiences and experiences with the activities!
      </Paragraph>

      <Title>
        {`Contact `}
        <Link target="_blank" href={`mailto:${marta}?subject=${subject}&body=${body}`}>
          here
        </Link>
      </Title>

      <HeaderTitle isAboutPage>Contributors</HeaderTitle>
      <ItemList>
        {`Designs: `}
        <Link target="_blank" href="https://www.samantafloor.com.br/">
          Samanta Flôor
        </Link>
      </ItemList>

      <ItemList>
        {`Design and web development: `}
        <Link target="_blank" href={`mailto:${rodrigo}?subject=${subject}&body=${body}`}>
          Rodrigo Avellar de Muniagurria
        </Link>
      </ItemList>

      <ItemList>
        {`Web development: `}
        <Link target="_blank" href={`mailto:${gustavo}?subject=${subject}&body=${body}`}>
          Gustavo Sohne
        </Link>
      </ItemList>
    </>
  )
}
