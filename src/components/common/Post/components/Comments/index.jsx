import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const Comments = ({
	comments: {
		creator_id,
		creator_username,
		comment,
		date
	}
}) => (
	<Wrapper>
		<Link to={`/profile/${creator_id}`}>{creator_username}</Link>
		<p>{comment}</p>
		<i>{timeAgo.format(Date.parse(date))}</i>
	</Wrapper>
)

export { Comments }
