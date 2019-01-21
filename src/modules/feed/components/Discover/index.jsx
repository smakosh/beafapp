import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, lifecycle, renderComponent, branch } from 'recompose'
import { Wrapper, Fixed, Block, User, Avatar, Details, UnFollowBtn } from './styles'
import { getUsers, followUser, unFollowUser } from '../../../discover/actions'
import { Button, Loading } from '../../../../components/common'

const Discover = ({ users, followUser, unFollowUser, myId }) => (
	<Wrapper>
		<Fixed>
			<h2>Discover people</h2>
			<Block>
				{users.data.map(({
					_id, firstName, lastName, username, avatar, followers
				}) => (
					<User key={_id}>
						<Link to={`/profile/${_id}`}>
							<Avatar src={avatar} alt={username} />
						</Link>
						<Details>
							<Link to={`/profile/${_id}`}>
								<h4>{`${firstName} ${lastName}`}</h4>
								<p>{`@${username}`}</p>
							</Link>
							{myId && (
								followers.find(user => user._id === myId)
									? (
										<UnFollowBtn as={Button} onClick={() => unFollowUser(_id, myId)} type="button" outlined="true">
                			<span>Following</span>
										</UnFollowBtn>
									) : (
										<Button onClick={() => followUser(_id, myId)} type="button">
                  		Follow
										</Button>
									)
							)}
						</Details>
					</User>
				))}
			</Block>
			<p>© {new Date().getFullYear()} Beaf</p>
		</Fixed>
	</Wrapper>
)

const mapStateToProps = ({ users }) => ({ users })

const enhance = compose(
	connect(mapStateToProps, {
		getUsers,
		followUser,
		unFollowUser
	}),
	lifecycle({
		componentDidMount() {
			this.props.getUsers()
		},
	}),
	branch(
		({ users }) => !users || !users.data || users.loading,
		renderComponent(Loading)
	)
)

export default enhance(Discover)
