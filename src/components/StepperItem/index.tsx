import React, { useState } from 'react'
import styled from 'styled-components'
import ToolTipText from '../ToolTipText'

export const StyledStepperItem = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.white};
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.colors.greenDark};
  border-radius: 100px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: ${({ theme }) => theme.colors.greenDark};
    border: none;
    cursor: pointer;
  }
`

export default function StepperItem({ children }: { children: string }) {
  const [isOn, setIsOn] = useState(false)

  return (
    <StyledStepperItem
      // href={`#${children}`}
      onMouseEnter={() => setIsOn(true)}
      onMouseLeave={() => setIsOn(false)}
    >
      <ToolTipText isOn={isOn}>{children}</ToolTipText>
    </StyledStepperItem>
  )
}
