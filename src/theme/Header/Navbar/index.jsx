import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../../components/common'
import NavbarLinks from '../NavbarLinks'
import { Brand, Wrapper } from './styles'

const Navbar = ({ logout, auth, history }) => (
	<Wrapper as={Container} newUser={auth && auth.loggedIn ? 0 : 1}>
		<Brand as={Link} to="/">
			BE<span>AF</span>
		</Brand>
		<NavbarLinks history={history} auth={auth} logout={logout} desktop />
	</Wrapper>
)

export default Navbar
