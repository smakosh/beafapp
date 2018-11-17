import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'

const Sidebar = ({ sidebar, toggle, logout }) => (
	<SidebarContainer active={sidebar} onClick={toggle}>
		<NavbarLinks logout={logout} />
	</SidebarContainer>
)

export default Sidebar
