import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.lato};
  visibility: ${({ isOn }: { isOn: boolean }) => (isOn ? 'visible' : 'hidden')};
  opacity: ${({ isOn }: { isOn: boolean }) => (isOn ? '1' : '0')};
  width: 350px;
  background-color: ${({ theme }) => theme.colors.orange};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 30px;
  padding: 5px;
  bottom: 8px;
  left: 100%;
  margin-left: 5px;
  transition: opacity 0.3s;
  text-decoration: none;
`

interface Props {
  isOn: boolean
  children: string
}

export default function ToopTipText({ isOn, children }: Props) {
  return <Text isOn={isOn}>{children}</Text>
}
