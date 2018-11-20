import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Tooltip from 'react-simple-tooltip'
import { Link } from 'react-router-dom'
import { Wrapper, UserInfo, Flex, Img, Content, Vote, Floating, Btn } from './styles'
import beforeIcon from '../../assets/before.svg'
import afterIcon from '../../assets/after.svg'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

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
	_creator
}) => (
	<Wrapper>
		<UserInfo>
			<h2>
				<Link to={`/profile/${_creator}`}>{_creator_username}</Link>
			</h2>
			<p>{timeAgo.format(Date.parse(date))}</p>
		</UserInfo>
		<Flex>
			<Img>
				<ImageZoom
					image={{
						src: before_img,
						alt: 'before picture',
						className: 'img'
					}}
				/>
			</Img>
			<Img>
				<ImageZoom
					image={{
						src: after_img,
						alt: 'after picture',
						className: 'img'
					}}
				/>
			</Img>
		</Flex>
		<Vote>
			<Btn before>
				<Tooltip content="Before">
					<Floating onClick={() => voteBefore(_id, userId)} before>
						<img src={beforeIcon} alt="vote before" />
					</Floating>
				</Tooltip>
				<p>{before_votes.length}</p>
			</Btn>
			<Btn>
				<Tooltip content="After">
					<Floating onClick={() => voteAfter(_id, userId)}>
						<img src={afterIcon} alt="vote before" />
					</Floating>
				</Tooltip>
				<p>{after_votes.length}</p>
			</Btn>
		</Vote>
		<Content>
			<h2>{title}</h2>
			<p>{description}</p>
		</Content>
	</Wrapper>
)

export default Post
