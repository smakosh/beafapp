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
				<Button as={Link} to="/add-post">ADD A NEW POST</Button>
			</Center>
			<img src={EmptyImg} alt="empty" />
		</Content>
	</Wrapper>
)

const Wrapper = styled.div`
  padding: 1rem 0;
`

const Content = styled.div`
  text-align: center;
  padding: 1rem;
  background: #fff;

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
