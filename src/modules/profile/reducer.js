export default (state = { loading: false }, action) => {
	switch (action.type) {
	case 'GET_PROFILE':
		return {
			...state,
			profile: action.payload,
			loading: false
		}
	case 'FAILED_TO_GET_PROFILE':
		return {
			errors: action.payload,
			loading: false
		}
	case 'LOADING_PROFILE':
		return {
			loading: true
		}
	default:
		return state
	}
}
