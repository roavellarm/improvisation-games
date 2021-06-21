import React, { ReactNode } from 'react'
import { StyledTooltip } from './styles'

export type ToolTipProps = {
  isMouseOver: boolean
  children: ReactNode
}

export default function ToolTipText({ isMouseOver, children }: ToolTipProps) {
  return <StyledTooltip isMouseOver={isMouseOver}>{children}</StyledTooltip>
}
