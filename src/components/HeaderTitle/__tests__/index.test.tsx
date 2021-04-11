import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { withTheme } from 'config/testSetup'
import HeaderTitle from '../index'

describe('when HeaderTitle is mount', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<HeaderTitle>Foo bar</HeaderTitle>))
    const element = queryByText('Foo bar')
    expect(element).toBeInTheDocument()
  })

  it('should have black color', () => {
    const { queryByText } = render(withTheme(<HeaderTitle>Foo bar</HeaderTitle>))
    const element = queryByText('Foo bar')
    expect(element).toHaveStyleRule('color', '#100B08')
  })
})

describe('when the HeaderTitle has isAboutPage true', () => {
  it('should have color greenDark', () => {
    const { queryByText } = render(withTheme(<HeaderTitle isAboutPage>Foo bar</HeaderTitle>))
    const element = queryByText('Foo bar')
    expect(element).toHaveStyleRule('color', '#4B5F52')
  })
})
