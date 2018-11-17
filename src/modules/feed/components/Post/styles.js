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
  align-items: center;
`

export const Img = styled.div`
  overflow: hidden;
  flex: 1;

  .img {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    display: block;
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
  text-align: left;
  align-self: flex-start;
  text-align: right;
  display: flex;
  align-items: center;
  flex-direction: row;

  p {
    margin: 0 0 0 .5rem;
  }

  ${({ before }) => before && `
    align-self: flex-end;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row-reverse;

    p {
      margin: 0 .5rem 0 0;
    }
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
