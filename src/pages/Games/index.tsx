import React from 'react'
// import ReactAudioPlayer from 'react-audio-player'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
import Title1 from '../../components/Title1'
import Title2 from '../../components/Title2'
import Title3 from '../../components/Title3'
import Paragraph from '../../components/Paragraph'
import games from '../../assets/games'
// import gameList from '../../mocks/gameList'
// import audio from '../../assets/ironMaiden.mp3'

interface TextProps {
  text: string
  flags: string[]
}

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>

      {games[0].map((item: TextProps, index) => {
        if (item?.flags.includes('paragraph')) {
          return (
            <Paragraph
              key={index}
              bold={!!item?.flags.includes('strong')}
              italic={!!item?.flags.includes('italic')}
            >
              {item?.text}
            </Paragraph>
          )
        }
        if (item?.flags.includes('title1')) {
          return <Title1 key={index}>{item?.text}</Title1>
        }
        if (item?.flags.includes('title2')) {
          return <Title2 key={index}>{item?.text}</Title2>
        }
        if (item?.flags.includes('title3')) {
          return <Title3 key={index}>{item?.text}</Title3>
        }
        return null
      })}

      {/* <ReactAudioPlayer src={audio} controls /> */}
    </S.Container>
  )
}
