import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(5,5,5,.13);
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    width: 90%;
  }
`

export const UserInfo = styled.div`
  padding: 1rem;
  text-align: left;

  h2 {
    margin-top: unset;
    margin-bottom: 0.5rem;
    font-size: 14pt;
  }

  p {
    margin: 0;
    color: #A7A6A6;
    font-size: 10pt;
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
  padding: 1rem;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;

  @media (max-width: 680px) {
    width: 40px;
    height: 40px;

    img {
      width: 16px;
    }
  }

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
  padding: 1rem;
  background: #fff;
  text-align: left;
  border-bottom: 1px solid #eee;

  h2 {
    margin-top: unset;
    margin-bottom: 0.5rem;
    font-size: 14pt;
  }

  p {
    margin: 0;
    color: #A7A6A6;
    font-size: 12pt;
  }
`
