import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { Wrapper, SingleComment, Flex, More } from './styles'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const Comments = ({ post_id, comments, showComments }) => {
	const replies = showComments ? comments : comments.slice(0, 3)
	return (
		<Wrapper>
			{replies
				.sort((a, b) => (a.date < b.date ? 1 : -1))
				.map(({ _id, creator_id, creator_username, comment, date }) => (
					<SingleComment key={_id}>
						<Flex>
							<Link to={`/profile/${creator_id}`}>{creator_username}</Link>
							<p>{comment}</p>
						</Flex>
						<i>{timeAgo.format(Date.parse(date))}</i>
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
