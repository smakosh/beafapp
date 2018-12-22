import styled from 'styled-components'

export const Links = styled.div`
	${({ desktop }) => (desktop ? `
		display: flex;
		align-items: center;

		.css-vj8t7z, .css-2o5izw {
				width: 150px;
				margin: 0 .5rem;
		}

		@media (max-width: 960px) {
				display: none;
		}

		a {
				margin-right: 1rem;

				&:last-child {
						margin-right: unset;
				}
		}
	` : `
		padding: 3rem;
		display: flex;
		flex-direction: column;

		.css-vj8t7z, .css-2o5izw {
				width: 100%;
				margin: 0 0 1rem 0;
		}

		a {
				margin-bottom: 1rem;

				&:last-child {
						margin-bottom: unset;
				}
		}
	`)}
`
