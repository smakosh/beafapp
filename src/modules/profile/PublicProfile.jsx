import React from 'react'
import { connect } from 'react-redux'
import { compose, renderComponent, branch, lifecycle } from 'recompose'
import { Container, Loading, SEO, ProfileDetails } from '../../components/common'
import { StyledContainer, Wrapper } from './styles'
import { getPostsByUserId, voteBefore, voteAfter, postNewComment, deleteComment, deletePost } from '../feed/actions'
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
	postNewComment,
	deletePost
}) => (
	<StyledContainer as={Container}>
		<SEO
			url={`/profile/${profile._id}`}
			title={profile.username}
			description={profile.bio}
		/>
		<Wrapper>
			<ProfileDetails
				loggedIn={user && isLoggedIn}
				avatar={profile.avatar}
				firstName={profile.firstName}
				lastName={profile.lastName}
				username={profile.username}
				bio={profile.bio}
			/>
			{data.length > 0 ? (
				<Posts
					posts={data}
					user={user}
					isLoggedIn={isLoggedIn}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
					postNewComment={postNewComment}
					deleteComment={deleteComment}
					deletePost={deletePost}
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
		deleteComment,
		deletePost
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
