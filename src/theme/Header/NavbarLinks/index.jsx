import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../../components/common'
import { Links } from './styles'

const NavbarLinks = ({ desktop, logout }) => (
	<Links desktop={desktop}>
		<NavLink
			as={NavLink}
			to="/feed"
			activeStyle={{ color: '#FF6347' }}
		>Feed</NavLink>
		<NavLink
			as={NavLink}
			to="/profile"
			activeStyle={{ color: '#FF6347' }}
		>Profile</NavLink>
		<Button type="button" onClick={logout}>
			Logout
		</Button>
	</Links>
)

export default NavbarLinks
