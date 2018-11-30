import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPostById, voteBefore, voteAfter, postNewComment, deleteComment } from './actions'
import { Loading, Container, SEO, Post } from '../../components/common'
import { Wrapper } from './styles'

const PostPage = ({
	auth, singlePost, voteBefore, voteAfter, postNewComment, deleteComment
}) => (
	<Wrapper as={Container}>
		<SEO
			url={`/post/${singlePost.post._id}`}
			title={singlePost.post.title}
			description={singlePost.post.description}
		/>
		<Post
			{...singlePost.post}
			userId={auth.user && auth.user._id}
			isLoggedIn={auth.isLoggedIn}
			userName={auth.user && auth.user.username}
			voteBefore={voteBefore}
			voteAfter={voteAfter}
			postNewComment={postNewComment}
			deleteComment={deleteComment}
			showComments
		/>
	</Wrapper>
)

const mapStateToProps = ({ singlePost, auth }) => ({
	singlePost,
	auth
})

const enhance = compose(
	connect(mapStateToProps, { getPostById, voteBefore, voteAfter, postNewComment, deleteComment }),
	lifecycle({
		componentWillMount() {
			this.props.getPostById(this.props.match.params.post_id)
		}
	}),
	branch(
		({ singlePost, auth }) => !auth || !singlePost || !singlePost.post || singlePost.loading,
		renderComponent(Loading)
	)
)

export default enhance(PostPage)
