import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../Post'
import { Wrapper, Content, Center } from './styles'
import { Button } from '../../../../components/common'

const Posts = ({ posts, user, voteBefore, voteAfter }) => (
	<Wrapper>
		<Content>
			<h2>Posts</h2>
			<Center>
				<Button as={Link} to="/add-post">ADD POST</Button>
			</Center>
			{posts.sort((a, b) => (a.date < b.date ? 1 : -1)).map(post => (
				<Post
					{...post}
					key={post._id}
					userId={user._id}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
				/>
			))}
		</Content>
	</Wrapper>
)

export default Posts
