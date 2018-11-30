import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1rem;
  border-top: 1px solid #eee;
  text-align: left;
`

export const SingleComment = styled.div`
  border-bottom: 1px solid #eee;
  padding: .8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: unset;
  }

  i {
    color: #adadad;
    font-size: 8pt;
    font-weight: lighter;
  }
`

export const CommentDetails = styled.div`
  flex: 1 auto;
  width: 100%;
  max-width: 88%;
`

export const Delete = styled.div`
  flex: 1 auto;
  width: 100%;
  max-width: 10%;
`

export const DeleteBtn = styled.div`
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;

  a {
    font-weight: 600;
    font-size: 10pt;
  }

  p {
    margin: 0 0 0 .5rem;
    font-size: 10pt;
    color: #202020;
  }
`

export const More = styled.div`
  padding: 1rem 0;

  a {
    color: #03A9F4;
  }
`
