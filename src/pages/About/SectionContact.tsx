import React from 'react'
import loadable from 'loadable-components'
import contact from 'helpers/contact'
import { Link } from './styles'

const HeaderTitle = loadable(() => import('components/HeaderTitle'))
const Paragraph = loadable(() => import('components/Paragraph'))
const Title = loadable(() => import('components/Title'))

export default function SectionContact() {
  const { email, subject, body } = contact

  return (
    <>
      <HeaderTitle isAboutPage>Me escreva!</HeaderTitle>
      <Paragraph>
        Se você experimentar alguma das propostas dos jogos, não deixe de
        compartilhar comigo. Será muito bom conhecer suas experiências e
        vivências com as atividades!
      </Paragraph>

      <Title>
        {`Entre em contato `}
        <Link
          target="_blank"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          aqui
        </Link>
      </Title>

      <Title>
        {`Colaboradores `}
        <Link
          target="_blank"
          href="https://github.com/roavellarm/improvisation-games#readme"
        >
          aqui
        </Link>
      </Title>
    </>
  )
}
