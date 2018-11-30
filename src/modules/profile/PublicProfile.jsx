import React from 'react'
import { connect } from 'react-redux'
import { compose, renderComponent, branch, lifecycle } from 'recompose'
import { Container, Loading, SEO } from '../../components/common'
import { StyledContainer, Wrapper } from './styles'
import { getPostsByUserId, voteBefore, voteAfter, postNewComment, deleteComment } from '../feed/actions'
import { getUserById } from './actions'
import Posts from './components/Posts'
import Empty from '../feed/components/Empty'

const PublicProfile = ({
	profile: { profile },
	auth: { user, isLoggedIn },
	posts: { data },
	voteBefore,
	voteAfter,
	deleteComment,
	postNewComment
}) => (
	<StyledContainer as={Container}>
		<SEO
			url={`/profile/${profile._id}`}
			title={profile.username}
			description={`Profile of ${profile.firstName} ${profile.lastName}`}
		/>
		<Wrapper>
			<h2>{user && user._id === profile._id && 'Welcome'} {`${profile.firstName} ${profile.lastName}`}</h2>
			<p>@{profile.username}</p>
			{data.length > 0 ? (
				<Posts
					posts={data}
					user={user}
					isLoggedIn={isLoggedIn}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
					postNewComment={postNewComment}
					deleteComment={deleteComment}
				/>
			) : <Empty />}
		</Wrapper>
	</StyledContainer>
)

const mapStateToProps = ({ profile, posts, auth }) => ({
	auth,
	profile,
	posts
})

const enhance = compose(
	connect(mapStateToProps, {
		getPostsByUserId,
		getUserById,
		voteBefore,
		voteAfter,
		postNewComment,
		deleteComment
	}),
	lifecycle({
		async componentWillMount() {
			await this.props.getUserById(this.props.match.params.user_id)
			this.props.getPostsByUserId(this.props.match.params.user_id)
		}
	}),
	branch(
		({ posts, profile, auth }) => !auth
			|| !profile || !profile.profile || !posts || !posts.data || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(PublicProfile)
