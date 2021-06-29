import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { withTheme } from 'config/testSetup'
import Dropdown from '..'

const mockPush = {
  push: jest.fn(),
}

jest.mock('react-router-dom', () => ({
  useHistory: () => mockPush,
}))

const props = {
  isArticleStyle: false,
  title: 'Foo bar',
  options: [
    'Lorem ipsum',
    'Dolor sit amet',
    'Consectetur adipiscing elit',
    'Etiam in tincidunt dui',
  ],
}

describe('when the Dropdown is closed', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Dropdown {...props} />))

    expect(queryByText('Foo bar')).toBeInTheDocument()
    expect(queryByText('Lorem ipsum')).not.toBeInTheDocument()
    expect(queryByText('Dolor sit amet')).not.toBeInTheDocument()
    expect(queryByText('Consectetur adipiscing elit')).not.toBeInTheDocument()
    expect(queryByText('Etiam in tincidunt dui')).not.toBeInTheDocument()
  })
})

describe('when the Dropdown is open', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Dropdown {...props} />))

    fireEvent.click(queryByText('Foo bar') as Element)

    expect(queryByText('X')).toBeInTheDocument()
    expect(queryByText('Lorem ipsum')).toBeInTheDocument()
    expect(queryByText('Dolor sit amet')).toBeInTheDocument()
    expect(queryByText('Consectetur adipiscing elit')).toBeInTheDocument()
    expect(queryByText('Etiam in tincidunt dui')).toBeInTheDocument()
  })
})

describe('when an option is choosed', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Dropdown {...props} />))
    fireEvent.click(queryByText('Foo bar') as Element)
    fireEvent.click(queryByText('Consectetur adipiscing elit') as Element)

    expect(mockPush.push).toHaveBeenCalledWith('/game/3')
  })
})

describe('when the Dropdown is in the article page', () => {
  it('should render correctly when is closed', () => {
    const { queryByText } = render(withTheme(<Dropdown {...props} />))
    fireEvent.click(queryByText('Foo bar') as Element)
    fireEvent.click(queryByText('X') as Element)

    expect(queryByText('Foo bar')).toBeInTheDocument()
  })

  it('should render correctly when is open', () => {
    const params = { ...props, isArticleStyle: true }
    const { queryByText } = render(withTheme(<Dropdown {...params} />))

    fireEvent.click(queryByText('Foo bar') as Element)

    expect(queryByText('X')).toBeInTheDocument()
    expect(queryByText('Foo bar')).not.toBeInTheDocument()
    expect(queryByText('Lorem ipsum')).toBeInTheDocument()
    expect(queryByText('Dolor sit amet')).toBeInTheDocument()
    expect(queryByText('Consectetur adipiscing elit')).toBeInTheDocument()
    expect(queryByText('Etiam in tincidunt dui')).toBeInTheDocument()
  })
})

describe('when an option is choosed in article style', () => {
  const params = { ...props, isArticleStyle: true }
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Dropdown {...params} />))

    fireEvent.click(queryByText('Foo bar') as Element)

    const element = queryByText('Dolor sit amet') as Element

    expect(element.getAttribute('href')).toBe('#Dolor sit amet')
  })
})
