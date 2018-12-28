import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 0;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 90%;
  }

  @media (max-width: 680px) {
   text-align: center;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 680px) {
   flex-direction: column; 
  }
`

export const Avatar = styled.a`
	border: 1px solid #eee;
	border-radius: 50%;
	width: 100px;
	height: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 680px) {
   order: 1;
  }
  
  ${({ avatar }) => avatar && `
    background-image: url('${avatar}');
  `}
`

export const Details = styled.div`
  padding-right: 1rem;

  @media (max-width: 680px) {
   order: 2;
   text-align: center;
  }

  h2 {
    margin-bottom: .2rem;
  }

  h4 {
    margin: .2rem 0 1rem 0;
    color: #848484;
  }

  p {
    color: #565656;
  }
`