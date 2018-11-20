import axios from 'axios'

const { REACT_APP_PROD_API } = process.env

const failedToGetProfile = error => ({
	type: 'FAILED_TO_GET_PROFILE',
	payload: error
})

export const getUserById = id => async dispatch => {
	try {
		await dispatch({ type: 'LOADING_PROFILE' })
		const res = await axios.get(`${REACT_APP_PROD_API}/api/user/${id}`)
		dispatch({ type: 'GET_PROFILE', payload: res.data })
	} catch (err) {
		dispatch(failedToGetProfile(err.response.data.error))
	}
}
