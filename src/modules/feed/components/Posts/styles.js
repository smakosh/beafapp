import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 68%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`

export const Content = styled.div`
  text-align: left;
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
