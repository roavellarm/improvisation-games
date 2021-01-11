import React, { useState } from 'react'
import styled from 'styled-components'
import ToolTipText from '../ToolTipText'

export const StyledStepperItem = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background: rgba(91, 124, 107, 0.04);
  margin: 5px;
  box-shadow: -1px 1px 4px rgba(91, 124, 107, 0.6);
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
      onMouseEnter={() => setIsOn(true)}
      onMouseLeave={() => setIsOn(false)}
    >
      <ToolTipText isOn={isOn}>{children}</ToolTipText>
    </StyledStepperItem>
  )
}
