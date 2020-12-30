import React from 'react'
import styled from 'styled-components'
import btnImage from '../../assets/button-image.png'

const StyledButton = styled.div`
  /* background: lightblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px;
  min-width: 162px;
`

const ButtonText = styled.text`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.buttonText};
  color: ${({ theme }) => theme.colors.greenDark};
`

interface ButtonProps {
  title: string
}

export default function Button({ title }: ButtonProps) {
  return (
    <StyledButton>
      <img src={btnImage} alt="ButtonImage" />
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  )
}
