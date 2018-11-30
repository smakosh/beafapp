import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { Wrapper, SingleComment, Flex, More, CommentDetails, Delete, DeleteBtn } from './styles'
import deleteIcon from '../../assets/delete.svg'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const Comments = ({ post_id, comments, showComments, userId, deleteComment }) => {
	const replies = showComments ? comments : comments.slice(0, 3)
	return (
		<Wrapper>
			{replies
				.sort((a, b) => (a.date < b.date ? 1 : -1))
				.map(({ _id, creator_id, creator_username, comment, date }) => (
					<SingleComment key={_id}>
						<CommentDetails>
							<Flex>
								<Link to={`/profile/${creator_id}`}>{creator_username}</Link>
								<p>{comment}</p>
							</Flex>
							<i>{timeAgo.format(Date.parse(date))}</i>
						</CommentDetails>
						{userId === creator_id && (
							<Delete>
								<DeleteBtn
									type="button"
									onClick={() => deleteComment(post_id, _id)}
								>
									<img
										src={deleteIcon}
										alt="delete post"
									/>
								</DeleteBtn>
							</Delete>
						)}
					</SingleComment>
				))}
			{!showComments && comments.length > 3 && (
				<More>
					<Link to={`/post/${post_id}`}>More comments</Link>
				</More>
			)}
		</Wrapper>
	)
}

export { Comments }
