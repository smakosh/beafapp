import React from 'react'
import { connect } from 'react-redux'
import { compose, renderComponent, branch, lifecycle } from 'recompose'
import { Container, Loading, SEO } from '../../components/common'
import { Wrapper, StyledContainer } from './styles'
import { getMyPosts, voteBefore, voteAfter, postNewComment, deleteComment } from '../feed/actions'
import Posts from './components/Posts'
import Empty from '../feed/components/Empty'

const Profile = ({
	auth, posts: { data }, voteBefore, voteAfter, deleteComment, postNewComment
}) => (
	<StyledContainer as={Container}>
		<SEO
			url="/profile"
			title={auth.user.username}
			description="Profile"
		/>
		<Wrapper>
			<h2>Welcome {`${auth.user.firstName} ${auth.user.lastName}`}</h2>
			<p>@{auth.user.username}</p>
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
	</StyledContainer>
)

const mapStateToProps = ({ auth, posts }) => ({
	auth,
	posts
})

const enhance = compose(
	connect(mapStateToProps, {
		getMyPosts,
		voteBefore,
		voteAfter,
		postNewComment,
		deleteComment
	}),
	lifecycle({
		componentWillMount() {
			this.props.getMyPosts()
		}
	}),
	branch(
		({ posts, auth }) => !auth || !posts || !posts.data || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Profile)
