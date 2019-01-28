import styled from 'styled-components'

export const Card = styled.div`
  padding: 2rem;
  box-shadow: 3px 0px 20px 0 rgba(0, 0, 0, 0.1);
  align-self: center;
  width: 90%;
  margin: 0 auto;
  background: #fff;

  ${({ register }) =>
    register &&
    `
		width: 60%;
	`}

  @media (max-width: 960px) {
    width: 80%;
    box-sizing: border-box;
  }

  @media (max-width: 680px) {
    width: 100%;
    box-sizing: border-box;
  }
`

export const Center = styled.div`
  text-align: center;
`

export const Wrapper = styled.div`
  padding: 4rem 0;
`

export const Show = styled.span`
  border: none;
  cursor: pointer;
  color: rgb(43, 133, 255);
  position: absolute;
  right: 0;
`
