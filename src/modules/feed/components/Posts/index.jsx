import React from 'react'
import { Post } from '../../../../components/common'
import { Wrapper, Content } from './styles'

const Posts = ({
	posts,
	user,
	voteBefore,
	voteAfter,
	isLoggedIn,
	postNewComment,
	deleteComment,
	deletePost,
	title
}) => (
	<Wrapper>
		<Content>
			<h2>{title}</h2>
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
