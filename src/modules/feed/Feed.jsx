import React from 'react'
import styled from 'styled-components'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPosts, voteBefore, voteAfter } from './actions'
import { Loading, Container, SEO } from '../../components/common'
import User from './components/User'
import Posts from './components/Posts'
import Empty from './components/Empty'

const Feed = ({ user, posts, voteBefore, voteAfter }) => (
	<Wrapper as={Container}>
		<SEO
			url="/feed"
			title="Feed"
			description="Feed"
		/>
		<User user={user} />
		{posts.length > 0 ? (
			<Posts
				posts={posts}
				user={user}
				voteBefore={voteBefore}
				voteAfter={voteAfter}
			/>
		) : <Empty />}
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	padding: 2rem 0;
	justify-content: space-between;
	flex-wrap: wrap;
	
	@media (max-width: 960px) {
		flex-direction: column;	
	}
`

const mapStateToProps = ({ posts, auth }) => ({
	posts: posts.data,
	user: auth.user
})

const enhance = compose(
	connect(mapStateToProps, { getPosts, voteBefore, voteAfter }),
	lifecycle({
		componentWillMount() {
			this.props.getPosts()
		}
	}),
	branch(
		({ posts, user }) => posts === undefined || user === undefined,
		renderComponent(Loading)
	)
)

export default enhance(Feed)
