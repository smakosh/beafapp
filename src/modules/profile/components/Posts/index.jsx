import React from 'react'
import { Post } from '../../../../components/common'
import { Wrapper, Content } from './styles'

const Posts = ({
	posts,
	isLoggedIn,
	user,
	voteBefore,
	voteAfter,
	deleteComment,
	postNewComment,
	deletePost
}) => (
	<Wrapper>
		<Content>
			<h2>Posts</h2>
			{posts.map(post => (
				<Post
					{...post}
					key={post._id}
					userId={user && user._id}
					userName={user && user.username}
					isLoggedIn={isLoggedIn}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
					postNewComment={postNewComment}
					deleteComment={deleteComment}
					deletePost={deletePost}
				/>
			))}
		</Content>
	</Wrapper>
)

export default Posts
