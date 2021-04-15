import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { withTheme } from 'config/testSetup'
import Button from '..'

describe('Button', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Button title="Foo bar" onClick={jest.fn()} />))
    expect(queryByText('Foo bar')).toBeInTheDocument()
  })
})

describe('when the button is clicked', () => {
  it('should call the function', () => {
    const testFunction = jest.fn()
    const { queryByText } = render(
      withTheme(<Button title="Foo bar" onClick={() => testFunction()} />)
    )
    fireEvent.click(queryByText('Foo bar') as Element)
    expect(testFunction).toHaveBeenCalled()
  })
})

describe('when the mouse is over the button', () => {
  it('should change the image position', () => {
    const { queryByText, queryByAltText } = render(
      withTheme(<Button title="Foo bar" onClick={jest.fn()} />)
    )
    const element = queryByText('Foo bar') as Element
    fireEvent.mouseEnter(element)
    const image = queryByAltText('leaf')
    expect(image).toHaveStyleRule('transform', 'rotate(90deg)')
  })
})

describe('when the mouse leaves off the button', () => {
  it('should change the image to the default position', () => {
    const { queryByText, queryByAltText } = render(
      withTheme(<Button title="Foo bar" onClick={jest.fn()} />)
    )
    const element = queryByText('Foo bar') as Element
    fireEvent.mouseLeave(element)
    const image = queryByAltText('leaf')
    expect(image).toHaveStyleRule('transform', undefined)
  })
})
