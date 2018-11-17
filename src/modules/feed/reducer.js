export default (state = { loading: false }, action) => {
	switch (action.type) {
	case 'GET_POSTS':
		return {
			...state,
			data: action.payload,
			loading: false
		}
	case 'FAILED_TO_GET_POSTS':
		return {
			errors: action.payload,
			loading: false
		}
	case 'LOADING_POSTS':
		return {
			loading: true
		}
	default:
		return state
	}
}
