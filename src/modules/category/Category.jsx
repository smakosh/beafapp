import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getPostsByCategory, voteBefore, voteAfter, postNewComment, deleteComment, deletePost } from '../feed/actions'
import { getUsers } from '../discover/actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from '../feed/components/Posts'
import Discover from '../feed/components/Discover'
import Empty from '../feed/components/Empty'
import { Wrapper } from './styles'

const Category = ({
	match: { params: { category } },
	auth,
	posts: { data },
	voteBefore,
	voteAfter,
	postNewComment,
	deleteComment,
	deletePost,
	users
}) => (
	<Wrapper as={Container}>
		<SEO
			url={`/category/${category}`}
			title={category}
			description={category}
		/>
		{data.length > 0 ? (
			<Posts
				title={category}
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
		<Discover
		 	users={users.data}
		/>
	</Wrapper>
)

const mapStateToProps = ({ posts, auth, users }) => ({
	posts,
	auth,
	users
})

const enhance = compose(
	connect(mapStateToProps,
		{
			getPostsByCategory,
			voteBefore,
			voteAfter,
			postNewComment,
			deleteComment,
			deletePost,
			getUsers
		}
	),
	lifecycle({
		async componentWillMount() {
			await this.props.getPostsByCategory(this.props.match.params.category)
			this.props.getUsers()
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
		({ posts, auth, users }) => !auth || !posts
		|| !posts.data || posts.loading || !users || !users.data,
		renderComponent(Loading)
	)
)

export default enhance(Category)
