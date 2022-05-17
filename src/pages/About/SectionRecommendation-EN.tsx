import React from 'react'
import openQuote from 'assets/images/openQuote.png'
import closeQuote from 'assets/images/closeQuote.png'
import { CitationContainer, Citation, QuoteImage, CloseQuoteContainer, Signature } from './styles'
import Paragraph from '../../components/Paragraph/index'

export default function SectionRecommendation() {
  return (
    <>
      <CitationContainer>
        <QuoteImage src={openQuote} alt="open quote" isOpenQuote />
        <Citation>
          <Paragraph italic>
            Here is a very timely initiative by Marta Brietzke! By sharing her valuable work here,
            containing creative proposals aimed at music education, she also instigates and
            promotes, along with many other educators, the creation of new and current alternatives
            for making music, interpreting a musical instrument, relating playfully and lucidly with
            itself and with each other. She opens the door and indicates the way for future
            musicians working in society to be competent in their profession, however, equally apt
            not to hinder their steps or thoughts, nor limit the life or movement of all music
            because they are aware that this is exactly what it is - experience lived responsibly
            and not falsely reassuring certainty - what matters most to all of us, today and
            tomorrow.
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
