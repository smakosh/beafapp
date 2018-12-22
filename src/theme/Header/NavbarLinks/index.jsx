import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Select from 'react-select'
import { Button } from '../../../components/common'
import { Links } from './styles'
import categories from './categories.json'

const NavbarLinks = ({ desktop, logout, auth, history }) => (
	<Links desktop={desktop}>
		<NavLink
			to="/"
			exact
			activeStyle={{ color: '#FF6347' }}
		>Feed</NavLink>
		<Select
			placeholder="Categories"
			component={Select}
			options={categories}
			onChange={({ value }) => history.push(`/category/${value}`)}
			name="category"
		/>
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
