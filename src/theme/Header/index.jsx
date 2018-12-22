import React from 'react'
import { connect } from 'react-redux'
import { compose, withStateHandlers, branch, renderNothing } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { StyledHeader, Overlay } from './styles'
import { logout } from '../../modules/auth/actions'

const Header = ({ sidebar, toggle, logout, auth, history }) => (
	<StyledHeader>
		<Overlay sidebar={sidebar} onClick={toggle} />
		<Navbar history={history} auth={auth} logout={logout} />
		<Hamburger sidebar={sidebar} toggle={toggle} />
		<Sidebar history={history} auth={auth} logout={logout} sidebar={sidebar} toggle={toggle} />
	</StyledHeader>
)

const mapStateToProps = ({ auth }) => ({
	auth
})

const enhance = compose(
	connect(mapStateToProps, { logout }, null, { pure: false }),
	withStateHandlers(
		() => ({ sidebar: false, isHomePage: false }),
		{
			toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
			setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage })
		}
	),
	branch(
		({ auth }) => !auth || auth.loading,
		renderNothing
	)
)

export default enhance(Header)
