import React from 'react'
import { compose, branch, renderComponent, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import {
	getPosts,
	voteBefore,
	voteAfter,
	postNewComment,
	deleteComment,
	deletePost
} from './actions'
import { 	getUsers } from '../discover/actions'
import { Loading, Container, SEO } from '../../components/common'
import Posts from './components/Posts'
import Empty from './components/Empty'
import Discover from './components/Discover'
import { Wrapper } from './styles'

const Feed = ({
	auth,
	posts: { data },
	voteBefore,
	voteAfter,
	postNewComment,
	deleteComment,
	deletePost,
	users,
	// followUser,
	// unFollowUser
}) => (
	<Wrapper as={Container}>
		<SEO
			url="/"
			title="Feed"
			description="Feed"
		/>
		 {data.length > 0 ? (
			<Posts
				title="Recent posts"
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
			// followUser={followUser}
			// unFollowUser={unFollowUser}
			// following={auth.user.following}
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
			getPosts,
			voteBefore,
			voteAfter,
			postNewComment,
			deleteComment,
			deletePost,
			getUsers
		}
	),
	lifecycle({
		async componentDidMount() {
			await this.props.getPosts()
			this.props.getUsers()
		}
	}),
	branch(
		({ posts, auth, users }) => !auth || !posts
		|| !posts.data || posts.loading || !users || !users.data,
		renderComponent(Loading)
	)
)

export default enhance(Feed)
