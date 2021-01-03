import styled from 'styled-components'

export const Navbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
`

export const Line = styled.div`
  display: flex;
  height: 8px;
  width: 100%;
  background: ${({ theme }) => theme.colors.greenLight};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(254, 254, 254, 1),
    rgba(254, 254, 254, 0)
  );
`

export const SideArea = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.link};
  color: ${({ theme }) => theme.colors.greenDark};

  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: scale(1.1, 1.1);
  }
`

export const Spacer = styled.div`
  width: 680px;
`
