import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import EmptyImg from '../../assets/empty.svg'
import { Button } from '../../../../components/common'

const Empty = () => (
	<Wrapper>
		<Content>
			<h2>No posts are available</h2>
			<Center>
				<Button as={Link} to="/add-post">ADD POST</Button>
			</Center>
			<img src={EmptyImg} alt="empty" />
		</Content>
	</Wrapper>
)

const Wrapper = styled.div`
  flex: 1 auto;
  width: 100%;
  max-width: 68%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`

const Content = styled.div`
  text-align: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 3px 0 16px 0 rgba(0, 0, 0, 0.12);

  h2 {
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`

const Center = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export default Empty
