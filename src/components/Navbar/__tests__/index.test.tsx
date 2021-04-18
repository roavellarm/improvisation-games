import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Navbar from '..'

const mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}))

describe('when the navbar is render in the game page', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar isGamePage />))
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Jogo 1')).toBeInTheDocument()
    expect(queryByText('Jogo 2')).toBeInTheDocument()
    expect(queryByText('Jogo 3')).toBeInTheDocument()
    expect(queryByText('Jogo 4')).toBeInTheDocument()
    expect(queryByText('Jogo 5')).toBeInTheDocument()
    expect(queryByText('Jogo 6')).toBeInTheDocument()
    expect(queryByText('Jogo 7')).toBeInTheDocument()
    expect(queryByText('Jogo 8')).toBeInTheDocument()
    expect(queryByText('Jogo 9')).toBeInTheDocument()
    expect(queryByText('Jogo 10')).toBeInTheDocument()
  })
})

describe('when the navbar is render in the article page', () => {
  it('should render correctly', () => {
    global.innerWidth = 500
    const { queryByText } = render(withTheme(<Navbar isArticlePage />))
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Tópicos')).toBeInTheDocument()
  })
})

describe('when the "Voltar" link is clicked', () => {
  it('should navigate to the homepage', () => {
    const { queryByText } = render(withTheme(<Navbar isGamePage />))
    const element = queryByText('<- Voltar') as Element
    fireEvent.click(element)

    expect(mockPush).toHaveBeenCalledWith('/')
  })
})
