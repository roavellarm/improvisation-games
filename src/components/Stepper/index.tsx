import React, { memo } from 'react'
import StepperItem from './StepperItem'
import { StyledStepper } from './styles'

type StepperProps = {
  anchors: string[]
  selectedStep: number
}

function Stepper({ anchors, selectedStep }: StepperProps) {
  return (
    <StyledStepper>
      {anchors.map((anchor: string, index: number) => {
        return (
          <a key={index} href={`#${anchor}`} style={{ textDecoration: 'none' }}>
            <StepperItem isSelected={selectedStep === index}>{anchor}</StepperItem>
          </a>
        )
      })}
    </StyledStepper>
  )
}

export default memo(Stepper)
