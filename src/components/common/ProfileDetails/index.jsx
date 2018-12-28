import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Flex, Avatar, Details } from './styles'
import { Button } from '../../common'

export const ProfileDetails = ({ loggedIn, profileId, userId, avatar, firstName, lastName, username, bio = '404 Bio not found!' }) => (
	<Wrapper>
		<Flex>
			<Details>
				<h2>{firstName} {lastName}</h2>
				<h4>@{username}</h4>
				<p>{bio}</p>
			</Details>
			<Avatar
				href={avatar}
				target="_blank"
				avatar={avatar}
			/>
		</Flex>
		{loggedIn && userId === profileId && (
			<Button as={Link} to="/profile/edit">Edit Profile</Button>
		)}
	</Wrapper>
)
