import React from 'react'
import { connect } from 'react-redux'
import { compose, renderComponent, branch, lifecycle } from 'recompose'
import { Container, Loading, SEO } from '../../components/common'
import { Wrapper, StyledContainer } from './styles'
import { getMyPosts, voteBefore, voteAfter } from '../feed/actions'
import Posts from './components/Posts'
import Empty from '../feed/components/Empty'

const Profile = ({ user, posts, voteBefore, voteAfter }) => (
	<StyledContainer as={Container}>
		<SEO
			url="/profile"
			title="Profile"
			description="Profile"
		/>
		<Wrapper>
			<h2>Welcome {`${user.firstName} ${user.lastName}`}</h2>
			<p>@{user.username}</p>
			{posts.length > 0 ? (
				<Posts
					posts={posts}
					user={user}
					voteBefore={voteBefore}
					voteAfter={voteAfter}
				/>
			) : <Empty />}
		</Wrapper>
	</StyledContainer>
)

const mapStateToProps = ({ auth, posts }) => ({
	user: auth.user,
	posts: posts.data
})

const enhance = compose(
	connect(mapStateToProps, { getMyPosts, voteBefore, voteAfter }),
	lifecycle({
		componentWillMount() {
			this.props.getMyPosts()
		}
	}),
	branch(
		({ posts, user }) => (posts === undefined || user === undefined) || posts.loading,
		renderComponent(Loading)
	)
)

export default enhance(Profile)
