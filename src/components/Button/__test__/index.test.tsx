import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '..'
import { setTestComponent } from '../../../config/testSetup'

describe('Button', () => {
  it('should render correctly', () => {
    const { queryByText } = render(
      setTestComponent(<Button title="Foo bar" onClick={jest.fn()} />)
    )
    expect(queryByText('Foo bar')).toBeInTheDocument()
  })
})

describe('when the button is clicked', () => {
  it('should call the function', () => {
    const testFunction = jest.fn()
    const { queryByText } = render(
      setTestComponent(
        <Button title="Foo bar" onClick={() => testFunction()} />
      )
    )
    fireEvent.click(queryByText('Foo bar') as Element)
    expect(testFunction).toHaveBeenCalled()
  })
})
