import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../Post'
import { Wrapper, Content, Center } from './styles'
import { Button } from '../../../../components/common'

const Posts = ({ posts }) => (
	<Wrapper>
		<Content>
			<h2>Posts</h2>
			<Center>
				<Button as={Link} to="/add-post">ADD POST</Button>
			</Center>
			{posts.map(post => (
				<Post {...post} key={post._id} />
			))}
		</Content>
	</Wrapper>
)

export default Posts
