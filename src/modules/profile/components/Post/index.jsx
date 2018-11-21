import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import LazyImage from 'react-lazy-progressive-image'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Wrapper, UserInfo, Flex, Img, Content, Vote, Floating, Btn } from './styles'
import beforeIcon from '../../../feed/assets/before.svg'
import afterIcon from '../../../feed/assets/after.svg'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const Post = ({
	title,
	description,
	before_img,
	after_img,
	date,
	before_votes,
	after_votes,
	_creator_username
}) => (
	<Wrapper>
		<UserInfo>
			<h2>{_creator_username}</h2>
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
		<Vote>
			<Btn before>
				<Floating disabled before>
					<img src={beforeIcon} alt="vote before" />
				</Floating>
				<p>{before_votes.length}</p>
			</Btn>
			<Btn>
				<Floating disabled>
					<img src={afterIcon} alt="vote before" />
				</Floating>
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
