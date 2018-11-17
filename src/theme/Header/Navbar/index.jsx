import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../../components/common'
import NavbarLinks from '../NavbarLinks'
import { Brand, Wrapper } from './styles'

const Navbar = ({ logout }) => (
	<Wrapper as={Container}>
		<Brand as={Link} to="/feed">
			BE<span>AF</span>
		</Brand>
		<NavbarLinks logout={logout} desktop />
	</Wrapper>
)

export default Navbar
