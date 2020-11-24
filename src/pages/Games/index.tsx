/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import ReactAudioPlayer from 'react-audio-player'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
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

      <S.Title>Metodologia:</S.Title>
      <ParagraphTwo>
        Organizar os alunos em um semicírculo. Explicar aos alunos o que pode
        ser uma pergunta e o que pode ser uma resposta dentro de uma narrativa
        musical. Dar um exemplo utilizando apenas as cordas soltas do
        violoncelo, contemplando diferentes ritmos, métricas, dinâmicas e
        variações de caráter. Propor uma pergunta ao primeiro aluno, que deve
        tocar uma resposta. Em seguida fazer o mesmo em relação ao segundo
        aluno, e assim sucessivamente, abordando à todos os alunos, um a um,
        individualmente. Realizar algumas rodadas do jogo. Organizar os alunos
        em duplas, dispostos em diferentes pontos da sala. Um aluno de cada
        dupla deve fazer as perguntas e o outro aluno deve fazer as respostas
        durante alguns minutos. Alternar os papeis da atividade anterior.
        Organizar novamente a turma em semicírculo. Cada dupla vem ao centro do
        semicírculo e realiza algumas séries de perguntas e respostas, //
        eslint-disable-next-line no-irregular-whitespace apresentando-as para
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
    </S.Container>
  )
}
