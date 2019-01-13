import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 0;
`

export const Content = styled.div`
  text-align: center;
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 680px) {
    padding: unset;
  }
`

export const Center = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`
