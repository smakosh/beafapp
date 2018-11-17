import axios from 'axios'
import { history } from '../../App'

const { REACT_APP_PROD_API } = process.env

const failedToGetPosts = error => ({
	type: 'FAILED_TO_GET_POSTS',
	payload: error
})

export const getPosts = () => async dispatch => {
	try {
		dispatch({ type: 'LOADING_POSTS' })

		const res = await axios.get(`${REACT_APP_PROD_API}/api/post/all`)
		dispatch({ type: 'GET_POSTS', payload: res.data })
	} catch (err) {
		dispatch(failedToGetPosts(err.response.data.error))
	}
}

export const addPost = (payload, setErrors, setSubmitting, resetForm) => async dispatch => {
	try {
		dispatch({ type: 'LOADING_POSTS' })

		await axios.post(`${REACT_APP_PROD_API}/api/post`, payload)
		resetForm()
		setSubmitting(false)
		history.push('/feed')
	} catch (err) {
		setSubmitting(false)
		setErrors({
			title: err.response.data.error
		})
		dispatch(failedToGetPosts(err.response.data.error))
	}
}
