import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import styled from 'styled-components'

const StyledPlayer = styled<any>(ReactAudioPlayer)`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  outline: none;
  z-index: 1 !important;
`

type AudioPlayerProps = {
  title: string
  src: string | undefined
}

export default function AudioPlayer({ title, src }: AudioPlayerProps) {
  return <StyledPlayer controls title={`Exemplo ${title}`} src={src} />
}
