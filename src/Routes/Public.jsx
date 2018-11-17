import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { branch, renderComponent, compose } from 'recompose'
import { Loading } from '../components/common'
import { GlobalStyle } from '../theme/global-styles'

const Public = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (auth.isLoggedIn ? (
			<Redirect to="/feed" />
		) : (
			<>
				<GlobalStyle />
				<Component {...props} />
			</>
		))
		}
	/>
)

const mapStateToProps = ({ auth }) => ({
	auth
})

const enhance = compose(
	connect(mapStateToProps),
	branch(
		({ auth }) => (auth.loading === undefined || auth.loading),
		renderComponent(Loading)
	)
)

export default enhance(Public)
