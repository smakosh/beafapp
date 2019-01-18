import styled from 'styled-components'

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	background: rgba(0, 0, 0, 0.88);
	display: flex;
	justify-content: center;
	z-index: 5;
`

export const Overlay = styled.div`
	align-self: center;
	text-align: center;
`

export const Left = styled.div`
	text-align: left;
	margin-bottom: 1rem;

	button {
		background: none;
		border: none;
		cursor: pointer;
	}
`
