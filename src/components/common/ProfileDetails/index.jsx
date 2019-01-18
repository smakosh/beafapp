import React from 'react'
import Tooltip from 'react-simple-tooltip'
import { Link } from 'react-router-dom'
import { Wrapper, Flex, Avatar, Details } from './styles'
import { Button } from '../../common'
import verifiedIcon from './assets/verified.svg'

export const ProfileDetails = ({ loggedIn, profileId, userId, avatar, isVerified, firstName, lastName, username, bio = '404 Bio not found!' }) => (
	<Wrapper>
		<Flex>
			<Details>
				<h2>
					<span>{firstName} {lastName}</span>
					{isVerified && (
						<Tooltip placement="right" fadeDuration={500} content="Verified account">
							<img src={verifiedIcon} alt="Verified Account" />
						</Tooltip>
					)}</h2>
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
