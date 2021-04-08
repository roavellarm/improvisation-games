import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Paragrah from '../index'

describe('when HeaderTitle is mount', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Paragrah>Foo bar</Paragrah>))
    const element = queryByText('Foo bar')
    expect(element).toBeInTheDocument()
  })
})

describe('when the Paragrah has isAboutPage true', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Paragrah>Foo bar</Paragrah>))
    const element = queryByText('Foo bar')
    expect(element).toBeInTheDocument()
  })
})
