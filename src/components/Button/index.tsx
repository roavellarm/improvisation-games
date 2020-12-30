import React, { useState } from 'react'
import * as S from './styles'
import btnImage from '../../assets/button-image.png'

interface ButtonProps {
  title: string
}

export default function Button({ title }: ButtonProps) {
  const [isOn, setIsOn] = useState(false)
  return (
    <S.Button
      onMouseEnter={() => setIsOn(true)}
      onMouseLeave={() => setIsOn(false)}
    >
      <S.Image isOn={isOn} src={btnImage} alt="leaf" />
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  )
}
