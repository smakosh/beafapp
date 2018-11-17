import React from 'react'
import Post from '../Post'
import { Wrapper, Content } from './styles'

const Posts = ({ posts, user }) => (
	<Wrapper>
		<Content>
			<h2>Posts</h2>
			{posts.sort((a, b) => (a.date < b.date ? 1 : -1)).map(post => (
				<Post
					{...post}
					key={post._id}
					userId={user._id}
				/>
			))}
		</Content>
	</Wrapper>
)

export default Posts
