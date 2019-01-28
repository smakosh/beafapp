import React from 'react'
import Tooltip from 'react-simple-tooltip'
import { Link } from 'react-router-dom'
import { Wrapper, Flex, Avatar, Details, UnFollowBtn } from './styles'
import { Button } from '../../common'
import verifiedIcon from './assets/verified.svg'

export const ProfileDetails = ({
  loggedIn,
  profileId,
  userId,
  avatar,
  isVerified,
  firstName,
  lastName,
  username,
  bio = '404 Bio not found!',
  followers,
  // following,
  unFollowUser,
  followUser,
}) => (
  <Wrapper>
    <Flex>
      <Details>
        <h2>
          <span>
            {firstName} {lastName}
          </span>
          {isVerified && (
            <Tooltip
              placement="right"
              fadeDuration={500}
              content="Verified account"
            >
              <img src={verifiedIcon} alt="Verified Account" />
            </Tooltip>
          )}
        </h2>
        <h4>@{username}</h4>
        <p>{bio}</p>
      </Details>
      <Avatar href={avatar} target="_blank" avatar={avatar} />
    </Flex>
    {loggedIn &&
      (userId === profileId ? (
        <Button as={Link} to="/profile/edit">
          Edit Profile
        </Button>
      ) : followers.find(user => user._id === userId) ? (
        <UnFollowBtn
          as={Button}
          onClick={() => unFollowUser(profileId, userId, true)}
          type="button"
          outlined="true"
        >
          <span>Following</span>
        </UnFollowBtn>
      ) : (
        <Button
          onClick={() => followUser(profileId, userId, true)}
          type="button"
        >
          Follow
        </Button>
      ))}
  </Wrapper>
)
