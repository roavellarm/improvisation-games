/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
import Stepper from '../../components/Stepper'
import gameList from '../../mocks/gameList'
import Paragraph from '../../components/Paragraph'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>
      <S.Title>
        Jogo 1: Pergunta e Resposta com cordas soltas em pizzicato
      </S.Title>
      <Paragraph>
        Objetivos: Propiciar aos alunos a consciência da sua individualidade e
        seu papel dentro do coletivo, estabelecer as ideias de narrativa
        musical, de perguntas e respostas, enfatizando o uso das quatro cordas
        do violoncelo, do pizzicato, de diferentes ritmos, métricas, timbres e e
        dinâmicas.
      </Paragraph>
      <S.BodyContainer>
        {gameList.map((item) => {
          return (
            <S.GameList key={item.id}>
              {item.title}

              <S.Image src={item.image} alt="image" />
            </S.GameList>
          )
        })}
      </S.BodyContainer>

      <Stepper />
    </S.Container>
  )
}
