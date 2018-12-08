import React from 'react'
import { Overlay, Wrapper, Content, Actions, Message } from './styles'
import { Button } from '../../common'

const Modal = ({
	title,
	description,
	action,
	onPress,
	cancel
}) => (
	<Overlay>
		<Wrapper>
			<Content>
				<Message>
					<p>{title}</p>
					{description && <p>{description}</p>}
				</Message>
				<Actions>
					<Button type="button" onClick={onPress} confirm>{action}</Button>
					<Button type="button" onClick={cancel} cancel>Cancel</Button>
				</Actions>
			</Content>
		</Wrapper>
	</Overlay>
)

export { Modal }
