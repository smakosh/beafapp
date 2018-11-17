import axios from 'axios'
import { history } from '../../App'
import setAuthToken from '../../utils/setAuthToken'

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

export const addPost = (
	image,
	image_2,
	payload,
	setErrors,
	setSubmitting,
	resetForm
) => async dispatch => {
	try {
		dispatch({ type: 'LOADING_POSTS' })

		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		}

		delete axios.defaults.headers.common['x-auth']
		const res = await axios.post('https://api.cloudinary.com/v1_1/dj8equdxc/image/upload', image, config)
		const before_img = res.data.secure_url
		const res_2 = await axios.post('https://api.cloudinary.com/v1_1/dj8equdxc/image/upload', image_2, config)
		const after_img = res_2.data.secure_url

		await setAuthToken(localStorage.jwtToken)

		await axios.post(`${REACT_APP_PROD_API}/api/post`, { ...payload, before_img, after_img })
		resetForm()
		setSubmitting(false)
		history.push('/feed')
	} catch (err) {
		setSubmitting(false)
		if (err.response.data.error.message) {
			setErrors({
				title: err.response.data.error.message
			})
		} else {
			setErrors({
				title: err.response.data.error
			})
		}
		dispatch(failedToGetPosts(err.response.data.error))
	}
}

export const voteBefore = (id, user_id) => async dispatch => {
	try {
		await axios.patch(`${REACT_APP_PROD_API}/api/post/vote/before/${id}`, { user_id })
		await dispatch({ type: 'BEFORE_VOTE', payload: { post_id: id, user_id } })
	} catch (err) {
		console.log(err)
		dispatch(failedToGetPosts(err.response.data.error))
	}
}

export const voteAfter = (id, user_id) => async dispatch => {
	try {
		await axios.patch(`${REACT_APP_PROD_API}/api/post/vote/after/${id}`, { user_id })
		dispatch({ type: 'AFTER_VOTE', payload: { post_id: id, user_id } })
	} catch (err) {
		dispatch(failedToGetPosts(err.response.data.error))
	}
}
