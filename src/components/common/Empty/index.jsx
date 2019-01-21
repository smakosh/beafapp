import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import EmptyImg from './empty.svg'
import { Button } from '../Button'

export const Empty = ({ profile }) => (
	<Wrapper profile={profile}>
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
  
  ${({ profile }) => !profile && `
    width: 100%;
    max-width: 68%;

    @media (max-width: 960px) {
      max-width: 90%;
      margin: 0 auto;
    }
  `}
`

const Content = styled.div`
  text-align: center;
  padding: 1rem;

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
