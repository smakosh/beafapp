import React from 'react'
import { Wrapper, Label } from './styles'

const InputField = ({ label, children }) => (
	<Wrapper>
		<Label>{label}</Label>
		{children}
	</Wrapper>
)

export { InputField }
