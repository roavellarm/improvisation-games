import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { withTheme } from 'config/testSetup'
import StepperItem from '..'

describe('when StepperItem is selected', () => {
  it('should have background green light', () => {
    const { queryByText } = render(withTheme(<StepperItem isSelected>Foo bar</StepperItem>))
    const element = queryByText('Foo bar')?.closest('div')
    expect(element).toHaveStyleRule('background', '#5B7C6B')
  })
})

describe('when StepperItem is not selected', () => {
  it('should have background green light with optacity', () => {
    const { queryByText } = render(withTheme(<StepperItem isSelected={false}>Foo bar</StepperItem>))
    const element = queryByText('Foo bar')?.closest('div')
    expect(element).toHaveStyleRule('background', 'rgba(91,124,107,0.04)')
  })
})

describe('on mouse enter', () => {
  it('should turn visible the tooltip text', () => {
    const { queryByText } = render(withTheme(<StepperItem isSelected>Foo bar</StepperItem>))
    const stepper = queryByText('Foo bar')?.closest('div') as Element
    fireEvent.mouseEnter(stepper)
    const tooltip = queryByText('Foo bar')?.closest('span')
    expect(tooltip).toHaveStyleRule('visibility', 'visible')
  })
})

describe('on mouse leave', () => {
  it('should hide the tooltip text', () => {
    const { queryByText } = render(withTheme(<StepperItem isSelected>Foo bar</StepperItem>))
    const stepper = queryByText('Foo bar')?.closest('div') as Element
    fireEvent.mouseLeave(stepper)
    const tooltip = queryByText('Foo bar')?.closest('span')
    expect(tooltip).toHaveStyleRule('visibility', 'hidden')
  })
})
