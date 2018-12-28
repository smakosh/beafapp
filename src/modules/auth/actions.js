import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { history } from '../../App'

const { REACT_APP_PROD_API } = process.env

const authFailed = error => ({
	type: 'AUTH_FAILED',
	payload: error
})

export const verifyToken = token => async dispatch => {
	try {
		dispatch({ type: 'LOADING_USER' })

		const res = await axios({
			method: 'GET',
			url: `${REACT_APP_PROD_API}/api/user/verify`,
			headers: {
				'Content-Type': 'application/json',
				'x-auth': token
			}
		})

		setAuthToken(token)
		await dispatch({ type: 'SAVE_USER', payload: res.data })
		if (history.location.pathname === '/' || history.location.pathname === '/register') {
			history.push('/')
		}
	} catch (err) {
		dispatch({ type: 'SAVE_USER', payload: {} })
		if (history.location.pathname !== '/' || history.location.pathname !== '/register') {
			history.push('/')
		}
	}
}

export const register = (payload, setErrors, setSubmitting, resetForm) => async dispatch => {
	try {
		const res = await axios.post(`${REACT_APP_PROD_API}/api/user/register`, payload)
		const { token, user } = res.data
		await dispatch({ type: 'LOADING_USER' })
		localStorage.setItem('jwtToken', token)
		setAuthToken(token)

		await dispatch({ type: 'SAVE_USER', payload: user })
		setSubmitting(false)
		resetForm()
		history.push('/')
	} catch (err) {
		setErrors({
			email: err.response.data.error
		})
		setSubmitting(false)
		dispatch(authFailed(err.response.data))
	}
}

export const login = (payload, setErrors, setSubmitting, resetForm) => async dispatch => {
	try {
		console.log(payload)
		const res = await axios.post(`${REACT_APP_PROD_API}/api/user/login`, payload)
		const { token, user } = res.data
		await dispatch({ type: 'LOADING_USER' })
		localStorage.setItem('jwtToken', token)
		await setAuthToken(token)

		await dispatch({ type: 'SAVE_USER', payload: user })
		setSubmitting(false)
		resetForm()
		history.push('/')
	} catch (err) {
		if (err.response.data.email) {
			setErrors({ email: err.response.data.email })
		} else if (err.response.data.email) {
			setErrors({ email: err.response.data.password })
		} else if (err.response.data.email && err.response.data.email) {
			setErrors({
				email: err.response.data.email,
				password: err.response.data.password
			})
		} else {
			setErrors({
				email: err.response.data.error
			})
		}
		setSubmitting(false)
		resetForm()
		dispatch(authFailed(err.response.data))
	}
}

export const logout = () => async dispatch => {
	try {
		await dispatch({ type: 'LOADING_USER' })
		await axios.delete(`${REACT_APP_PROD_API}/api/user/logout`)

		localStorage.removeItem('jwtToken')
		setAuthToken(false)
		dispatch(({ type: 'SAVE_USER', payload: {} }))
		history.push('/')
	} catch (err) {
		console.log(err)
	}
}
