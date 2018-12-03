import React from 'react'
import { Overlay, Wrapper, Content, Actions } from './styles'
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
				<h2>{title}</h2>
				{description && <p>{description}</p>}
				<Actions>
					<Button type="button" onClick={onPress} confirm>{action}</Button>
					<Button type="button" onClick={cancel} cancel>Cancel</Button>
				</Actions>
			</Content>
		</Wrapper>
	</Overlay>
)

export { Modal }
