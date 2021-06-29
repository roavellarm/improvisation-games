import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Navbar from '..'

const mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}))

const desktopSize = {
  windowWidth: 1920,
  windowHeight: 1080,
}

const mobileSize = {
  windowWidth: 360,
  windowHeight: 640,
}

describe('when navbar is render in a game page on desktop device', () => {
  const props = {
    currentPage: 'gamePage',
    initialState: desktopSize,
  }
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar {...props} />))
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

describe('when navbar is render in a game page on mobile device', () => {
  const props = {
    isGamePage: true,
    initialState: mobileSize,
  }

  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar {...props} />))
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Jogo 1')).not.toBeInTheDocument()
  })
})

describe('when navbar is render in the article page on desktop device', () => {
  const props = {
    isArticlePage: true,
    initialState: desktopSize,
  }
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar {...props} />))
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Tópicos')).not.toBeInTheDocument()
  })
})

describe('when navbar is rendered in the article page on mobile device', () => {
  const props = {
    currentPage: 'articlePage',
    initialState: mobileSize,
  }
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar {...props} />))
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Tópicos')).toBeInTheDocument()
  })
})

describe('when the "Voltar" link is clicked', () => {
  it('should navigate to the homepage', () => {
    const { queryByText } = render(withTheme(<Navbar currentPage="gamePage" />))
    const element = queryByText('<- Voltar') as Element
    fireEvent.click(element)

    expect(mockPush).toHaveBeenCalledWith('/')
  })
})

describe('when the viewport changes from desktop to mobile', () => {
  it('it should change the layout', () => {
    const props = {
      currentPage: 'articlePage',
      initialState: desktopSize,
    }
    const { queryByText } = render(withTheme(<Navbar {...props} />))

    expect(queryByText('Tópicos')).not.toBeInTheDocument()

    act(() => {
      global.innerWidth = 360
      global.innerHeight = 640
      global.dispatchEvent(new Event('resize'))
    })

    expect(queryByText('Tópicos')).toBeInTheDocument()
  })
})
