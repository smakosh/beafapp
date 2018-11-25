import React from 'react'
import { Post } from '../../../../components/common'
import { Wrapper, Content } from './styles'

const Posts = ({ posts, user, voteBefore, voteAfter, isLoggedIn }) => (
	<Wrapper>
		<Content>
			<h2>Posts</h2>
			{posts.map(post => (
				<Post
					{...post}
					key={post._id}
					userId={user && user._id}
					isLoggedIn={isLoggedIn}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
				/>
			))}
		</Content>
	</Wrapper>
)

export default Posts
