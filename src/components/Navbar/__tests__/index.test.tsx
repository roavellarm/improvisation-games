import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Navbar from '..'

const mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockPush }),
}))

const resizeToDesktop = () => {
  global.innerWidth = 1920
  global.innerHeight = 1080
  global.dispatchEvent(new Event('resize'))
}

const resizeToMobile = () => {
  global.innerWidth = 360
  global.innerHeight = 640
  global.dispatchEvent(new Event('resize'))
}

describe('when navbar is render in a game page on desktop device', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar currentPage="gamePage" />))
    act(() => resizeToDesktop())
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
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar currentPage="gamePage" />))
    act(() => resizeToMobile())
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Jogo 1')).not.toBeInTheDocument()
  })
})

describe('when navbar is render in the article page on desktop device', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar currentPage="articlePage" />))
    act(() => resizeToDesktop())
    expect(queryByText('<- Voltar')).toBeInTheDocument()
    expect(queryByText('Tópicos')).not.toBeInTheDocument()
  })
})

describe('when navbar is rendered in the article page on mobile device', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<Navbar currentPage="articlePage" />))
    act(() => resizeToMobile())
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
    const { queryByText } = render(withTheme(<Navbar currentPage="articlePage" />))
    act(() => resizeToDesktop())
    expect(queryByText('Tópicos')).not.toBeInTheDocument()
    act(() => resizeToMobile())
    expect(queryByText('Tópicos')).toBeInTheDocument()
  })
})
