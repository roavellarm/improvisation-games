import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

export default function Header() {
  return (
    <>
      <S.Header>
        <S.Option>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Home
          </Link>
        </S.Option>
        <S.Option>
          <Link
            to="/games"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            Games
          </Link>
        </S.Option>
        <S.Option>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Sobre
          </Link>
        </S.Option>
        <S.Option>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Revista
          </Link>
        </S.Option>
        <S.Option>
          {' '}
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Revista
          </Link>
        </S.Option>
      </S.Header>
    </>
  )
}
