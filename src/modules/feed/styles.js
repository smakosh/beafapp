import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	padding: 2rem 0;
	justify-content: space-between;
	flex-wrap: wrap;
  justify-content: center;
	
	@media (max-width: 960px) {
		flex-direction: column;
    width: 100%;
	}
`
