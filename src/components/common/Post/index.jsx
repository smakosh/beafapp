import React from 'react'
import { Wrapper } from './styles'
import { PostHeader, Pictures, Content, Vote, Comments } from './components'

const comments = {
	creator_id: 0,
	creator_username: 'Username',
	comment: 'A dummy comment!',
	date: '2018-11-17T23:43:23.396Z'
}

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
	// postNewComment,
	// comments
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
		<Comments comments={comments} />
		{/* <AddComment postNewComment={postNewComment} /> */}
	</Wrapper>
)

export { Post }
