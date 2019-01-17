import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(5,5,5,.13);
  margin-bottom: 4rem;
  background: #fff;
  overflow: hidden;

  ${({ flex }) => flex && `
    width: 100%;
    max-width: 48%;

    @media (max-width: 960px) {
      max-width: 100%;
    }
  `}
`
