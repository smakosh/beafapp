import styled from 'styled-components'

export const StyledHeader = styled.div`
	background: #fff;
	width: 100%;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.03);
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
