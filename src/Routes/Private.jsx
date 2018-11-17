import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { compose, branch, renderComponent } from 'recompose'
import { Loading } from '../components/common'
import { GlobalStyle } from '../theme/global-styles'
import Header from '../theme/Header'

const Private = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (auth.isLoggedIn ? (
			<>
				<GlobalStyle />
				<Header />
				<Component {...props} />
			</>
		) : (
			<Redirect to="/" />
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

export default enhance(Private)
