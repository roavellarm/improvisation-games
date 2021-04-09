import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Line from '..'

describe('Line', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(withTheme(<Line />))
    expect(queryByTestId('lineComponent')).toBeInTheDocument()
  })
})
