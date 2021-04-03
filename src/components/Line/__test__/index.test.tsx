import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Line from '..'
import { setTestComponent } from '../../../config/testSetup'

describe('Line', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(setTestComponent(<Line />))
    expect(queryByTestId('lineComponent')).toBeInTheDocument()
  })
})
