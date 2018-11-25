import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'

const Sidebar = ({ sidebar, toggle, logout, auth }) => (
	<SidebarContainer active={sidebar} onClick={toggle}>
		<NavbarLinks auth={auth} logout={logout} />
	</SidebarContainer>
)

export default Sidebar
