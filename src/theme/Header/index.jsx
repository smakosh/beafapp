import React from 'react'
import { connect } from 'react-redux'
import { compose, withStateHandlers } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { StyledHeader, Overlay } from './styles'
import { logout } from '../../modules/auth/actions'

const Header = ({ sidebar, toggle, logout }) => (
	<StyledHeader>
		<Overlay sidebar={sidebar} onClick={toggle} />
		<Navbar logout={logout} />
		<Hamburger sidebar={sidebar} toggle={toggle} />
		<Sidebar logout={logout} sidebar={sidebar} toggle={toggle} />
	</StyledHeader>
)

const enhance = compose(
	connect(null, { logout }, null, { pure: false }),
	withStateHandlers(
		() => ({ sidebar: false, isHomePage: false }),
		{
			toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
			setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage })
		}
	)
)

export default enhance(Header)
