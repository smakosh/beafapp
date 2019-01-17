import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Fixed, Block, User, Avatar, Details } from './styles'
// import { Button } from '../../../../components/common'

export default ({ users /* , followUser, unFollowUser, following */ }) => (
	<Wrapper>
		<Fixed>
			<h2>Discover people</h2>
			<Block>
				{users.map(({
					_id, firstName, lastName, username, avatar,
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
							{/* following.includes(_id)
								? (
									<Button onClick={() => unFollowUser(_id)} type="button">
                Unfollow
									</Button>
								) : (
									<Button onClick={() => followUser(_id)} type="button">
                  Follow
									</Button>
								)
							 */}
						</Details>
					</User>
				))}
			</Block>
			<p>© {new Date().getFullYear()} Beaf</p>
		</Fixed>
	</Wrapper>
)
