import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import store from './store'
import Private from './Routes/Private'
import Public from './Routes/Public'
import { verifyToken } from './modules/auth/actions'

import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import Profile from './modules/profile/Profile'
import PublicProfile from './modules/profile/PublicProfile'
import Feed from './modules/feed/Feed'
import AddPost from './modules/feed/AddPost'
import { NotFound } from './components/common'

export const history = createHistory()

try {
	if (localStorage.jwtToken) {
		store.dispatch(verifyToken(localStorage.jwtToken))
	}
} catch (e) {
	if (history.location.pathname !== '/') {
		history.push('/')
	}
}

const AppRoutes = () => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Public path="/" exact component={Login} />
				<Public path="/register" component={Register} />
				<Private path="/profile" exact component={Profile} />
				<Private path="/profile/:user_id" component={PublicProfile} />
				<Private path="/feed" component={Feed} />
				<Private path="/add-post" component={AddPost} />
				<Public component={NotFound} />
			</Switch>
		</Router>
	</Provider>
)

export default AppRoutes
