import React from 'react'
import { Post } from '../../../../components/common'
import { Wrapper, Flex } from './styles'

const Posts = ({ posts, isLoggedIn, user }) => (
  <Wrapper>
    <h2>Posts</h2>
    <Flex>
      {posts.map(post => (
        <Post
          flex
          profile
          {...post}
          key={post._id}
          userId={user && user._id}
          userName={user && user.username}
          isLoggedIn={isLoggedIn}
          /* voteBefore={voteBefore}
					voteAfter={voteAfter}
					postNewComment={postNewComment}
					deleteComment={deleteComment}
					deletePost={deletePost} */
        />
      ))}
    </Flex>
  </Wrapper>
)

export default Posts
