import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPostsByCategory, voteBefore, voteAfter, postNewComment, deleteComment, deletePost } from '../feed/actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from '../feed/components/Posts'
import Empty from '../feed/components/Empty'
import { Wrapper } from './styles'

const Category = ({
	match,
	auth,
	posts: { data },
	voteBefore,
	voteAfter,
	postNewComment,
	deleteComment,
	deletePost
}) => (
	<Wrapper as={Container}>
		<SEO
			url={`/category/${match.params.category}`}
			title={match.params.category}
			description="Category"
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
				deletePost={deletePost}
			/>
		) : <Empty />}
	</Wrapper>
)

const mapStateToProps = ({ posts, auth }) => ({
	posts,
	auth
})

const enhance = compose(
	connect(mapStateToProps,
		{ getPostsByCategory, voteBefore, voteAfter, postNewComment, deleteComment, deletePost }
	),
	lifecycle({
		componentWillMount() {
			this.props.getPostsByCategory(this.props.match.params.category)
		},
		componentWillReceiveProps(nextProps) {
			if (nextProps.posts.errors === 'Invalid category') {
				this.props.history.push('/404')
			}

			if (nextProps.match.params.category !== this.props.match.params.category) {
				this.props.getPostsByCategory(nextProps.match.params.category)
			}
		}
	}),
	branch(
		({ posts, auth }) => !auth || !posts || !posts.data || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Category)
