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
      <HeaderTitle isAboutPage>Me escreva!</HeaderTitle>
      <Paragraph>
        Se você experimentar alguma das propostas dos jogos, não deixe de compartilhar comigo. Será
        muito bom conhecer suas experiências e vivências com as atividades!
      </Paragraph>

      <Title>
        {`Entre em contato `}
        <Link target="_blank" href={`mailto:${marta}?subject=${subject}&body=${body}`}>
          aqui
        </Link>
      </Title>

      <HeaderTitle isAboutPage>Colaboradores</HeaderTitle>
      <ItemList>
        {`Desenhos: `}
        <Link target="_blank" href="https://www.samantafloor.com.br/">
          Samanta Flôor
        </Link>
      </ItemList>

      <ItemList>
        {`Design e desenvolvimento web: `}
        <Link target="_blank" href={`mailto:${rodrigo}?subject=${subject}&body=${body}`}>
          Rodrigo Avellar de Muniagurria
        </Link>
      </ItemList>

      <ItemList>
        {`Desenvolvimento web: `}
        <Link target="_blank" href={`mailto:${gustavo}?subject=${subject}&body=${body}`}>
          Gustavo Sohne
        </Link>
      </ItemList>
    </>
  )
}
