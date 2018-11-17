import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
`

export const UserInfo = styled.div`
  padding: 1.5rem 1rem;

  h2 {
    margin-top: unset;
  }

  p {
    margin: 0;
    color: #A7A6A6;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: 400px;
`

export const Img = styled.div`
  width: 100%;
  max-width: 50%;
  flex: 1 auto;
  height: 100%;
  align-self: stretch;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Vote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1.5rem 1rem;
`

export const Btn = styled.div`
  width: 100%;
  max-width: 48%;
  align-self: flex-start;
  text-align: left;

  ${({ before }) => before && `
    align-self: flex-end;
    text-align: right;
  `}
`

export const Floating = styled.button`
  border: none;
  background: #536DFE;
  padding: .9rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;

  &:hover {
    box-shadow: 0 5px 10px 0 #536DFE;
    transform: scale(1.1);
    transition: .3s;

    ${({ before }) => before && `
      box-shadow: 0 5px 10px 0 #FF6347;
    `}
  }

  ${({ before }) => before && `
    background: #FF6347;
  `}
`

export const Content = styled.div`
  padding: 1.5rem 1rem;

  h2 {
    margin-top: unset;
  }

  p {
    margin: 0;
    color: #A7A6A6;
  }
`
