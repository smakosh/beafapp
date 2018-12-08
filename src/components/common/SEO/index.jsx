import React from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import defaultCover from './assets/cover.png'

const { REACT_APP_URL, REACT_APP_NAME } = process.env

const SEO = ({
	url,
	title,
	description,
	cover
}) => {
	const initializeReactGA = () => {
		ReactGA.initialize('UA-88875900-3')
		ReactGA.pageview(url)
	}
	initializeReactGA()
	return (
		<Helmet>
			{/* TODO: Add structured data <script type="application/ld+json">{structuredData}</script> */}
			{title && <title>{REACT_APP_NAME} | {title}</title>}
			<meta name="description" content={description || 'description'} />
			<meta property="og:title" content={title || REACT_APP_NAME} />
			<meta property="og:description" content={description || 'description'} />
			<meta property="og:url" content={`${REACT_APP_URL}/${url}`} />
			<meta name="twitter:url" content={`${REACT_APP_URL}/${url}`} />
			<meta name="twitter:title" content={title || 'Clean hajj'} />
			<meta name="twitter:description" content={description || 'description'} />
			<meta name="image" content={cover || defaultCover} />
			<meta property="og:image" content={cover || defaultCover} />
			<meta name="twitter:image:src" content={cover || defaultCover} />
		</Helmet>
	)
}

export { SEO }
