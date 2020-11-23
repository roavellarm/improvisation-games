/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import ReactAudioPlayer from 'react-audio-player'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
import Stepper from '../../components/Stepper'
import ParagraphTwo from '../../components/ParagraphTwo'
// import gameList from '../../mocks/gameList'
// import audio from '../../assets/ironMaiden.mp3'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>
      <S.Title>
        Jogo 1:
        <br />
        Pergunta e Resposta com cordas soltas em pizzicato
      </S.Title>
      <ParagraphTwo>
        Propiciar aos alunos a consciência da sua individualidade e seu papel
        dentro do coletivo, estabelecer as ideias de narrativa musical, de
        perguntas e respostas, enfatizando o uso das quatro cordas do
        violoncelo, do pizzicato, de diferentes ritmos, métricas, timbres e e
        dinâmicas.
      </ParagraphTwo>
      <S.BodyContainer>
        {/* {gameList.map((item) => {
          return (
            <S.GameList key={item.id}>
              {item.title}

              <S.Image src={item.image} alt="image" />
            </S.GameList>
          )
        })} */}
        {/* <ReactAudioPlayer src={audio} controls /> */}
      </S.BodyContainer>

      <Stepper />
    </S.Container>
  )
}
