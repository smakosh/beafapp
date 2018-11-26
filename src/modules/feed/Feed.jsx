import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPosts, voteBefore, voteAfter, postNewComment } from './actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from './components/Posts'
import Empty from './components/Empty'
import { Wrapper } from './styles'

const Feed = ({ auth, posts, voteBefore, voteAfter, postNewComment }) => (
	<Wrapper as={Container}>
		<SEO
			url="/"
			title="Feed"
			description="Feed"
		/>
		{posts.length > 0 ? (
			<Posts
				posts={posts}
				user={auth.user}
				isLoggedIn={auth.isLoggedIn}
				voteBefore={voteBefore}
				voteAfter={voteAfter}
				postNewComment={postNewComment}
			/>
		) : <Empty />}
	</Wrapper>
)

const mapStateToProps = ({ posts, auth }) => ({
	posts: posts.data,
	auth
})

const enhance = compose(
	connect(mapStateToProps, { getPosts, voteBefore, voteAfter, postNewComment }),
	lifecycle({
		componentWillMount() {
			this.props.getPosts()
		}
	}),
	branch(
		({ posts, auth }) => (!posts || !auth) || !!posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Feed)
