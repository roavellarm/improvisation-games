import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { withTheme } from 'config/testSetup'
import SubTitle from '../index'

describe('when subTitle is mount', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<SubTitle>Foo bar</SubTitle>))
    const element = queryByText('Foo bar')
    expect(element).toBeInTheDocument()
  })

  it('should have dark green color', () => {
    const { queryByText } = render(withTheme(<SubTitle>Foo bar</SubTitle>))
    const element = queryByText('Foo bar')
    expect(element).toHaveStyleRule('color', '#4B5F52')
  })
})
