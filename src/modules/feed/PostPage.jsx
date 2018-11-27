import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPostById, voteBefore, voteAfter, postNewComment } from './actions'
import { Loading, Container, SEO, Post } from '../../components/common'
import { Wrapper } from './styles'

const PostPage = ({
	auth, posts, voteBefore, voteAfter, postNewComment
}) => (
	<Wrapper as={Container}>
		<SEO
			url={`/post/${posts.post._id}`}
			title={posts.post.title}
			description={posts.post.description}
		/>
		<Post
			{...posts.post}
			userId={auth.user && auth.user._id}
			isLoggedIn={auth.isLoggedIn}
			voteBefore={voteBefore}
			voteAfter={voteAfter}
			postNewComment={postNewComment}
			showComments
		/>
	</Wrapper>
)

const mapStateToProps = ({ posts, auth }) => ({
	posts,
	auth
})

const enhance = compose(
	connect(mapStateToProps, { getPostById, voteBefore, voteAfter, postNewComment }),
	lifecycle({
		componentWillMount() {
			this.props.getPostById(this.props.match.params.post_id)
		}
	}),
	branch(
		({ posts, auth }) => !auth || !posts || !posts.post || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(PostPage)
