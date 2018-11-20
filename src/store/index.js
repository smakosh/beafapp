import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from '../modules/auth/reducer'
import FeedReducer from '../modules/feed/reducer'
import ProfileReducer from '../modules/profile/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(
	combineReducers({
		auth: AuthReducer,
		posts: FeedReducer,
		profile: ProfileReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
)

export default store
