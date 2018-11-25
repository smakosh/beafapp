import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from '../../../components/common'
import { Links } from './styles'

const NavbarLinks = ({ desktop, logout, auth }) => (
	<Links desktop={desktop}>
		<NavLink
			to="/"
			exact
			activeStyle={{ color: '#FF6347' }}
		>Feed</NavLink>
		{auth && auth.isLoggedIn && (
			<NavLink
				to="/add-post"
				activeStyle={{ color: '#FF6347' }}
			>New Post</NavLink>
		)}
		{auth && auth.isLoggedIn && (
			<NavLink
				to="/profile"
				exact
				activeStyle={{ color: '#FF6347' }}
			>Profile</NavLink>
		)}
		{auth && auth.isLoggedIn ? (
			<Button type="button" onClick={logout}>
				Logout
			</Button>
		) : (
			<Button as={Link} to="/login">
				Login
			</Button>
		)}
	</Links>
)

export default NavbarLinks
