import React from 'react'

import Paragraph from 'components/Paragraph'
import openQuote from 'assets/images/openQuote.png'
import closeQuote from 'assets/images/closeQuote.png'
import { CitationContainer, QuoteImage, Citation, CloseQuoteContainer, Signature } from './styles'

export default function SectionRecommendation() {
  return (
    <>
      <CitationContainer>
        <QuoteImage src={openQuote} alt="open quote" isOpenQuote />
        <Citation>
          <Paragraph italic>
            Eis uma oportuníssima iniciativa da Marta Brietzke! Ao compartilhar aqui o seu valioso
            trabalho, contendo propostas criativas dirigidas à educação musical ela instiga e
            promove também, junto a muitos outros educadores, a criação de novas e atuais
            alternativas de se fazer música, interpretar um instrumento musical, se relacionar
            lúdica e lucidamente consigo e com o outro. Abre a porta e indica o caminho para que
            futuros músicos atuantes na sociedade sejam competentes em sua profissão, porém,
            igualmente aptos em não tolher seus passos ou pensamentos, nem limitar a vida ou o
            movimento de toda música por estarem conscientes de que é justamente isso - a
            experimentação vivida responsavelmente e não a certeza falsamente asseguradora - o que
            mais importa a todos nós, hoje e amanhã.
          </Paragraph>
        </Citation>
        <CloseQuoteContainer>
          <QuoteImage src={closeQuote} alt="close quote" />
        </CloseQuoteContainer>
      </CitationContainer>
      <Signature>Carlos Kater</Signature>
    </>
  )
}
