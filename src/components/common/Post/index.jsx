import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import TimeAgo from 'javascript-time-ago'
import LazyImage from 'react-lazy-progressive-image'
import en from 'javascript-time-ago/locale/en'
import Tooltip from 'react-simple-tooltip'
import { Link } from 'react-router-dom'
import { Wrapper, UserInfo, Flex, Img, Content, Vote, Floating, Btn } from './styles'
import beforeIcon from './assets/before.svg'
import afterIcon from './assets/after.svg'

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
	_creator,
	isLoggedIn
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
				<LazyImage
					placeholder="https://placeholder.pics/svg/300"
					src={before_img}
				>
					{(src, loading, isVisible) => (
						<ImageZoom
							image={{
								src,
								alt: 'before picture',
								className: 'img'
							}}
						/>
					)}
				</LazyImage>
			</Img>
			<Img>
				<LazyImage
					placeholder="https://placeholder.pics/svg/300"
					src={after_img}
				>
					{(src, loading, isVisible) => (
						<ImageZoom
							image={{
								src,
								alt: 'after picture',
								className: 'img'
							}}
						/>
					)}
				</LazyImage>
			</Img>
		</Flex>
		<Content>
			<h2>{title}</h2>
			<p>{description}</p>
		</Content>
		<Vote>
			<Btn before>
				<Tooltip content="Before">
					{isLoggedIn ? (
						<Floating onClick={() => voteBefore(_id, userId)} before="true">
							<img src={beforeIcon} alt="vote before" />
						</Floating>
					) : (
						<Floating as={Link} to="/login" isLink="true" before="true">
							<img src={beforeIcon} alt="vote before" />
						</Floating>
					)}
				</Tooltip>
				<p>{before_votes.length}</p>
			</Btn>
			<Btn>
				<Tooltip content="After">
					{isLoggedIn ? (
						<Floating onClick={() => voteAfter(_id, userId)}>
							<img src={afterIcon} alt="vote before" />
						</Floating>
					) : (
						<Floating as={Link} isLink="true" to="/login">
							<img src={afterIcon} alt="vote after" />
						</Floating>
					)}
				</Tooltip>
				<p>{after_votes.length}</p>
			</Btn>
		</Vote>
	</Wrapper>
)

export { Post }
