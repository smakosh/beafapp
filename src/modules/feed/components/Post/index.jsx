import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { Wrapper, UserInfo, Flex, Img, Content, Vote, Floating, Btn } from './styles'
import beforeIcon from '../../assets/before.svg'
import afterIcon from '../../assets/after.svg'

const Post = ({
	title,
	description
}) => (
	<Wrapper>
		<UserInfo>
			<h2>Smakosh</h2>
			<p>10 mins ago</p>
		</UserInfo>
		<Flex>
			<Img>
				<ImageZoom
					image={{
						src: 'https://images.unsplash.com/photo-1539640229250-1601290db72a',
						alt: 'before picture',
						className: 'img'
					}}
				/>
			</Img>
			<Img>
				<ImageZoom
					image={{
						src: 'https://images.unsplash.com/photo-1539640764985-b833530fb7a0',
						alt: 'after picture',
						className: 'img'
					}}
				/>
			</Img>
		</Flex>
		<Vote>
			<Btn before>
				<Floating before>
					<img src={beforeIcon} alt="vote before" />
				</Floating>
			</Btn>
			<Btn>
				<Floating>
					<img src={afterIcon} alt="vote before" />
				</Floating>
			</Btn>
		</Vote>
		<Content>
			<h2>{title}</h2>
			<p>{description}</p>
		</Content>
	</Wrapper>
)

export default Post
