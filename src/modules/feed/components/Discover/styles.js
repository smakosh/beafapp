import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 28%;
  align-self: flex-start;

  @media (max-width: 960px) {
    display: none;
  }
`

export const Fixed = styled.div`
  position: fixed;
  width: 100%;
  max-width: 255px;

  p {
    color: #bbbaba;
  }
`

export const Block = styled.div`
  background: #fff;
  padding: .5rem;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: unset;
  }
`

export const Avatar = styled.img`
  margin-right: .8rem;
  border: 1px solid #eee;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  object-fit: contain;
`

export const Details = styled.div`
  a {
    display: flex;
    flex-direction: column;
    
    h4 {
      word-break: break-all;
      color: #000;
      font-weight: bold;
      margin: 0 0 .2rem 0;
    }

    p {
      color: #8899a6;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      margin: unset;
    }
  }

  button {
    padding: .4rem .9rem;
    font-size: 10pt;
    margin-top: .5rem;
  }
`
