import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { UserInfo } from './styles'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const PostHeader = ({ _creator, _creator_username, date }) => (
	<UserInfo>
		<h2>
			<Link to={`/profile/${_creator}`}>{_creator_username}</Link>
		</h2>
		<p>{timeAgo.format(Date.parse(date))}</p>
	</UserInfo>
)

export { PostHeader }
