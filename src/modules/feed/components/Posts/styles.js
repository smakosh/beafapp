import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1 auto;
  width: 100%;
  max-width: 68%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`

export const Content = styled.div`
  text-align: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 3px 0 16px 0 rgba(0, 0, 0, 0.12);
`

export const Center = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`
