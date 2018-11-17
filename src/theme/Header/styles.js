import styled from 'styled-components'

export const StyledHeader = styled.div`
	background: #fff;
	width: 100%;
	border-bottom: .01em solid rgb(204, 204, 204);
`

export const Overlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, .7);
	width: 100%;
	height: 100%;
	display: none;
	transition: .4s;

	${({ sidebar }) => sidebar && `
		display: block;
		z-index: 4;	
	`}
`
