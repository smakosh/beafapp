import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

export const Overlay = styled.div`
  max-width: 60%;
  background: #fff;
  border-radius: 3px;
  overflow-y: scroll;
  max-height: 200px;
  align-self: center;
  z-index: 1;
  position: relative;
`

export const SubOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Card = styled.div`
  padding: 1rem;
`

export const Item = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`
