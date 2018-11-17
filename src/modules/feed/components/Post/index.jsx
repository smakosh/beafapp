import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
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
	_creator,
	userId,
	voteBefore,
	voteAfter,
	before_votes,
	after_votes
}) => (
	<Wrapper>
		<UserInfo>
			<h2>Smakosh</h2>
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
		{_creator !== userId && (
			<Vote>
				<Btn before>
					<Floating onClick={() => voteBefore(_id, userId)} before>
						<img src={beforeIcon} alt="vote before" />
					</Floating>
					<p>{before_votes.length}</p>
				</Btn>
				<Btn>
					<Floating onClick={() => voteAfter(_id, userId)}>
						<img src={afterIcon} alt="vote before" />
					</Floating>
					<p>{after_votes.length}</p>
				</Btn>
			</Vote>
		)}
		<Content>
			<h2>{title}</h2>
			<p>{description}</p>
		</Content>
	</Wrapper>
)

export default Post
