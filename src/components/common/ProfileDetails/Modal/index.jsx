import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../../common'
import { Wrapper, Overlay, Card, Item, SubOverlay } from './styles'

export default ({ toggleModal, content, history }) => (
  <Wrapper>
    <SubOverlay onClick={() => toggleModal(false)} />
    <Overlay as={Container}>
      <Card>
        {content.map(({ _id, username }) => (
          <Item key={_id}>
            <Link
              to={`/profile/${_id}`}
              onClick={() => {
                toggleModal(false)
                history.push(`/profile/${_id}`)
              }}
            >
              {username}
            </Link>
          </Item>
        ))}
        <button type="button" onClick={() => toggleModal(false)}>
          close
        </button>
      </Card>
    </Overlay>
  </Wrapper>
)
