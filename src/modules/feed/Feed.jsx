import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPosts, voteBefore, voteAfter } from './actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from './components/Posts'
import Empty from './components/Empty'
import { Wrapper } from './styles'

const Feed = ({ user, posts, voteBefore, voteAfter }) => (
	<Wrapper as={Container}>
		<SEO
			url="/feed"
			title="Feed"
			description="Feed"
		/>
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
		({ posts, user }) => (posts === undefined || user === undefined) || !!posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Feed)
