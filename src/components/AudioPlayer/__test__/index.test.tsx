import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AudioPlayer from '..'
import { setTestComponent } from '../../../config/testSetup'

describe('Audio Player', () => {
  it('should render correctly', () => {
    const tree = render(
      setTestComponent(<AudioPlayer title="Foo bar" src="audioSource" />)
    )
    expect(tree).toMatchSnapshot()
  })
})
