import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import CarouselNavbar from '..'

const mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}))

export type GameContent = {
  text?: string
  style: Array<string>
  audio?: string
}

export type Game = {
  id: string
  gameTitle: string
  content: GameContent[]
}

const gameList = [
  {
    id: '1',
    gameTitle: 'Foo',
    content: [
      {
        text: 'Vivamus mattis ex nec eleifend efficitur',
        style: ['title1'],
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        style: ['paragraph'],
      },
    ],
  },
  {
    id: '2',
    gameTitle: 'Bar',
    content: [
      {
        text: 'Nulla nec pharetra nisl',
        style: ['title1'],
      },
      {
        text: 'Phasellus venenatis imperdiet turpis sed condimentum.',
        style: ['itemList'],
      },
    ],
  },
]

describe('when the CarouselNavbar is render', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<CarouselNavbar gameList={gameList} />))
    expect(queryByText('Foo')).toBeInTheDocument()
    expect(queryByText('Bar')).toBeInTheDocument()
  })
})

describe('when a game option is clicked', () => {
  it('should navigate to the page of the chosen game', () => {
    global.window.scrollTo = jest.fn()
    const { queryByText } = render(withTheme(<CarouselNavbar gameList={gameList} />))
    const gameOption = queryByText('Bar') as Element
    fireEvent.click(gameOption)
    expect(mockPush).toHaveBeenCalledWith('/game/2')
    expect(mockPush).not.toHaveBeenCalledWith('/game/1')
  })
})
