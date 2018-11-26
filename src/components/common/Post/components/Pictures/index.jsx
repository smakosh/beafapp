import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import LazyImage from 'react-lazy-progressive-image'
import { Flex, Img } from './styles'

const Pictures = ({
	before_img,
	after_img
}) => (
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
)


export { Pictures }
