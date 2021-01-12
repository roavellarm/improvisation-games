import React, { useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import ToolTipText from '../ToolTipText'

interface StyledStepperProps {
  theme: DefaultTheme
  isSelected: boolean
}

export const StyledStepperItem = styled.div<StyledStepperProps>`
  position: relative;
  width: 20px;
  height: 20px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.greenLight : 'rgba(91, 124, 107, 0.04)'};
  margin: 5px;
  box-shadow: -1px 1px 4px rgba(91, 124, 107, 0.6);
  border-radius: 100px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: rgba(91, 124, 107, 0.4);
    border: none;
    cursor: pointer;
  }
`

interface Props {
  children: string
  isSelected: boolean
}

export default function StepperItem({ children, isSelected }: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <StyledStepperItem
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      isSelected={isSelected}
    >
      <ToolTipText isMouseOver={isMouseOver}>{children}</ToolTipText>
    </StyledStepperItem>
  )
}
