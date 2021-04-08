import React, { ReactNode, useState } from 'react'

import ToolTipText from '../ToolTipText'
import { StyledStepperItem } from './styles'

export type Props = {
  children: ReactNode
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
