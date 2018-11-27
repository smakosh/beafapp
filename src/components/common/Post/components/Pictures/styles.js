import styled from 'styled-components'

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
