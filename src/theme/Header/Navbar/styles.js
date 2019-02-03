import styled from 'styled-components'

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #212121;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16pt;

  span {
    color: #ff6347;
  }
`

export const Wrapper = styled.div`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ newUser }) =>
    newUser &&
    `
        padding: 1.5rem 0;
    `}
`
