export default (state = { loading: false }, action) => {
	switch (action.type) {
	case 'GET_USERS':
		return {
			...state,
			data: action.payload,
			loading: false
		}
	case 'FAILED_TO_GET_USERS':
		return {
			...state,
			errors: action.payload,
			loading: false
		}
	case 'FOLLOW':
		return {
			...state,
			data: state.data.map(item => item._id === action.payload.user_id ? (
				{
					...item,
					followers: item.followers.includes(action.payload.user_id)
						? item.followers.filter(user => user._id !== action.payload.user_id)
						: [...item.followers, action.payload.user_id]
				}
			) : item)
		}
	case 'LOADING_USERS':
		return {
			loading: true
		}
	default:
		return state
	}
}
