import React, { useCallback, useEffect, useMemo, useState } from 'react'
import dissertation from 'assets/texts/DissertacaoMartaMacedoBrietzke.pdf'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'

import { Link, Picture } from './styles'

export default function SectionKnowledge() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobileScreen = useMemo(() => windowWidth <= 500, [windowWidth])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <>
      <HeaderTitle isAboutPage>About</HeaderTitle>
      <Paragraph>
        This website is designed for cello teachers of beginning instrumental development students
        who use collective teaching approaches. It is the product of a master&apos;s research
        carried out in 2017 and 2018 at the University of São Paulo, São Paulo, Brazil.
      </Paragraph>
      <Paragraph>
        Although the research work was directed towards cello students, many of the proposals
        contained in the games can be developed for other instruments and also for other levels of
        learning, and it is up to each teacher to make the adaptations he or she deems necessary and
        effective for their demands. In addition, there are many developments of the initial
        proposals that can raise other ideas and work perspectives.
      </Paragraph>
      <Paragraph>Have fun!</Paragraph>

      <Title>About Author</Title>
      <Picture isMobile={isMobileScreen} />
      <Paragraph>
        My name is Marta Macedo Brietzke and I am from Porto Alegre, Rio Grande do Sul, Brazil. I
        started my music studies with my father and, soon after, I participated in the Projeto
        Prelúdio and in the Orquestra Infanto-Juvenil of the Universidade Federal do Rio Grande do
        Sul, with violin and cello. I graduated in Music at the same university, doing my
        postgraduate studies in São Paulo, at the Universidade de São Paulo.
      </Paragraph>
      <Paragraph>
        I worked as an instrumentalist and as a teacher in orchestras and social projects in the
        capital and metropolitan region of my state. Together with some cello students, we founded a
        self-managed space for teaching and learning the cello in Porto Alegre, called Filarmônica
        de Violoncelos-Tchêllistas. My research area is related to the collective teaching of
        musical instruments, approaching different possibilities and facets. I also dedicate myself
        to the performance of contemporary concert music, making the premiere of some pieces by
        Brazilian composers.
      </Paragraph>

      <Paragraph>
        {`My `}
        <strong>dissertation</strong>
        {` master's thesis is available  `}
        <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
          here
        </Link>
        .
      </Paragraph>
      <br />
    </>
  )
}
