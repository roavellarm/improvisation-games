import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import AudioPlayer from '..'

describe('Audio Player', () => {
  it('should render correctly', () => {
    const tree = render(withTheme(<AudioPlayer title="Foo bar" src="audioSource" />))
    expect(tree).toMatchSnapshot()
  })
})
