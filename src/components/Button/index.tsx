import React, { useState } from 'react'
import * as S from './styles'
import btnImage from '../../assets/images/button-image.png'

type ButtonProps = {
  title: string
  onClick(): void
}

export default function Button({ title, onClick }: ButtonProps) {
  const [isOn, setIsOn] = useState(false)
  return (
    <S.Button
      onMouseEnter={() => setIsOn(true)}
      onMouseLeave={() => setIsOn(false)}
      onClick={() => onClick()}
    >
      <S.Image isOn={isOn} src={btnImage} alt="leaf" />
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  )
}
