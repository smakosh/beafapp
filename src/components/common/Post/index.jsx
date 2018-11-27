import React from 'react'
import { Wrapper } from './styles'
import { PostHeader, Pictures, Content, Vote, Comments, AddComment } from './components'

const Post = ({
	_id,
	title,
	description,
	before_img,
	after_img,
	date,
	userId,
	voteBefore,
	voteAfter,
	before_votes,
	after_votes,
	_creator_username,
	_creator,
	isLoggedIn,
	postNewComment,
	comments,
	showComments
}) => (
	<Wrapper>
		<PostHeader
			date={date}
			_creator={_creator}
			_creator_username={_creator_username}
		/>
		<Pictures
			before_img={before_img}
			after_img={after_img}
		/>
		<Content
			title={title}
			description={description}
		/>
		<Vote
			_id={_id}
			userId={userId}
			voteBefore={voteBefore}
			voteAfter={voteAfter}
			before_votes={before_votes}
			after_votes={after_votes}
			isLoggedIn={isLoggedIn}
		/>
		<Comments
			post_id={_id}
			comments={comments}
			showComments={showComments}
		/>
		{isLoggedIn && (
			<AddComment
				_id={_id}
				_creator={_creator}
				_creator_username={_creator_username}
				postNewComment={postNewComment}
			/>
		)}
	</Wrapper>
)

export { Post }
