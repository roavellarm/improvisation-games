import React from 'react'
import { render } from '@testing-library/react'
import { withTheme } from 'config/testSetup'
import '@testing-library/jest-dom/extend-expect'

import ItemList from '..'

describe('when the component is render', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<ItemList>Foo bar</ItemList>))
    expect(queryByText(/Foo bar/)).toBeInTheDocument()
  })
})
