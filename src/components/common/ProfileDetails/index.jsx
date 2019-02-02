import React from 'react'
import Tooltip from 'react-simple-tooltip'
import { compose, withStateHandlers } from 'recompose'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { Wrapper, Flex, Avatar, Details, UnFollowBtn } from './styles'
import { Button, DefaultBtn } from '../../common'
import verifiedIcon from './assets/verified.svg'

const ProfileWrapper = ({
  isVisible,
  toggleModal,
  modalContent,
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
  following,
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
        <DefaultBtn
          type="button"
          disabled={followers.length < 1}
          onClick={() => {
            if (followers) toggleModal(true, followers)
            else alert(`You don't seem to have any followers yet!`)
          }}
        >
          {followers.length} Followers
        </DefaultBtn>
        <DefaultBtn
          type="button"
          disabled={following.length < 1}
          onClick={() => {
            if (following) toggleModal(true, following)
            else alert(`Start following someone to help them make decisions!`)
          }}
        >
          {following.length} Following
        </DefaultBtn>
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
    {isVisible && <Modal toggleModal={toggleModal} content={modalContent} />}
  </Wrapper>
)

const enhance = compose(
  withStateHandlers(
    ({ followers }) => ({
      isVisible: false,
      modalContent: followers,
    }),
    {
      toggleModal: () => (value, content) => ({
        isVisible: value,
        modalContent: content,
      }),
    }
  )
)

export const ProfileDetails = enhance(ProfileWrapper)
