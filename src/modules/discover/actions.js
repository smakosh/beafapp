import axios from 'axios'

const { REACT_APP_PROD_API } = process.env

const failedToGetUsers = error => ({
	type: 'FAILED_TO_GET_USERS',
	payload: error
})

export const getUsers = () => async dispatch => {
	try {
		dispatch({ type: 'LOADING_USERS' })

		if (localStorage.jwtToken) {
			axios.defaults.headers.common['x-auth'] = localStorage.jwtToken
		}

		const res = await axios.post(`${REACT_APP_PROD_API}/api/user/users/all`)
		dispatch({ type: 'GET_USERS', payload: res.data })
	} catch (err) {
		dispatch(failedToGetUsers(err.response.data.error))
	}
}

export const followUser = id => async dispatch => {
	try {
		await axios.patch(`${REACT_APP_PROD_API}/api/user/follow/${id}`)
		dispatch({ type: 'FOLLOW', payload: { user_id: id } })
	} catch (err) {
		console.log(err)
		dispatch(failedToGetUsers(err.response.data.error))
	}
}

export const unFollowUser = id => async dispatch => {
	try {
		await axios.patch(`${REACT_APP_PROD_API}/api/user/unfollow/${id}`)
		dispatch({ type: 'FOLLOW', payload: { user_id: id } })
	} catch (err) {
		console.log(err)
		dispatch(failedToGetUsers(err.response.data.error))
	}
}
