import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPosts, voteBefore, voteAfter, postNewComment, deleteComment } from './actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from './components/Posts'
import Empty from './components/Empty'
import { Wrapper } from './styles'

const Feed = ({ auth, posts: { data }, voteBefore, voteAfter, postNewComment, deleteComment }) => (
	<Wrapper as={Container}>
		<SEO
			url="/"
			title="Feed"
			description="Feed"
		/>
		{data.length > 0 ? (
			<Posts
				posts={data}
				user={auth.user}
				isLoggedIn={auth.isLoggedIn}
				voteBefore={voteBefore}
				voteAfter={voteAfter}
				postNewComment={postNewComment}
				deleteComment={deleteComment}
			/>
		) : <Empty />}
	</Wrapper>
)

const mapStateToProps = ({ posts, auth }) => ({
	posts,
	auth
})

const enhance = compose(
	connect(mapStateToProps, { getPosts, voteBefore, voteAfter, postNewComment, deleteComment }),
	lifecycle({
		componentWillMount() {
			this.props.getPosts()
		}
	}),
	branch(
		({ posts, auth }) => !auth || !posts || !posts.data || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Feed)
