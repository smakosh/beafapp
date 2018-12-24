import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 0;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 90%;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Avatar = styled.a`
	border: 1px solid #eee;
	border-radius: 50%;
	width: 100px;
	height: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  
  ${({ avatar }) => avatar && `
    background-image: url('${avatar}');
  `}
`

export const Details = styled.div`
  padding-right: 1rem;

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
