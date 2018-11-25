import React from 'react'
import { connect } from 'react-redux'
import { compose, renderComponent, branch, lifecycle } from 'recompose'
import { Container, Loading, SEO } from '../../components/common'
import { StyledContainer, Wrapper } from './styles'
import { getPostsByUserId, voteBefore, voteAfter } from '../feed/actions'
import { getUserById } from './actions'
import Posts from './components/Posts'
import Empty from '../feed/components/Empty'

const PublicProfile = ({ profile, auth, posts, voteBefore, voteAfter }) => (
	<StyledContainer as={Container}>
		<SEO
			url="/profile"
			title="Profile"
			description="Profile"
		/>
		<Wrapper>
			<h2>{auth.user && auth.user._id === profile._id && 'Welcome'} {`${profile.firstName} ${profile.lastName}`}</h2>
			<p>@{profile.username}</p>
			{posts.length > 0 ? (
				<Posts
					posts={posts}
					user={profile}
					isLoggedIn={auth.isLoggedIn}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
				/>
			) : <Empty />}
		</Wrapper>
	</StyledContainer>
)

const mapStateToProps = ({ profile, posts, auth }) => ({
	auth,
	profile: profile.profile,
	posts: posts.data
})

const enhance = compose(
	connect(mapStateToProps, { getPostsByUserId, getUserById, voteBefore, voteAfter }),
	lifecycle({
		async componentWillMount() {
			await this.props.getUserById(this.props.match.params.user_id)
			this.props.getPostsByUserId(this.props.match.params.user_id)
		}
	}),
	branch(
		({ posts, profile, auth }) => (!posts || !profile || !auth) || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(PublicProfile)
