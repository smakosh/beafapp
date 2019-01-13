import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(5,5,5,.13);
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    max-width: 90%;
  }
`
