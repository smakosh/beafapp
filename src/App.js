import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import store from './store'
import Private from './Routes/Private'
import Public from './Routes/Public'
import { verifyToken } from './modules/auth/actions'

import Header from './theme/Header'
import { GlobalStyle } from './theme/global-styles'
import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import Profile from './modules/profile/Profile'
import PublicProfile from './modules/profile/PublicProfile'
import EditProfile from './modules/profile/EditProfile'
import Feed from './modules/feed/Feed'
import Category from './modules/category/Category'
import PostPage from './modules/post/PostPage'
import AddPost from './modules/feed/AddPost'
import { NotFound } from './components/common'

export const history = createHistory()

try {
  if (localStorage.jwtToken) {
    store.dispatch(verifyToken(localStorage.jwtToken))
  }
} catch (e) {
  if (history.location.pathname !== '/') {
    history.push('/login')
  }
}

const AppRoutes = () => (
  <Provider store={store}>
    <Router history={history}>
      <ScrollContext>
        <>
          <GlobalStyle />
          <Header history={history} />
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/category/:category" component={Category} />
            <Public path="/login" component={Login} />
            <Public path="/register" component={Register} />
            <Private path="/profile" exact component={Profile} />
            <Private path="/profile/edit" exact component={EditProfile} />
            <Route path="/profile/:user_id" component={PublicProfile} />
            <Route path="/post/:post_id" component={PostPage} />
            <Private path="/add-post" component={AddPost} />
            <Route component={NotFound} />
          </Switch>
        </>
      </ScrollContext>
    </Router>
  </Provider>
)

export default AppRoutes
