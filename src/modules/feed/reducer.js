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
			...state,
			errors: action.payload,
			loading: false
		}
	case 'BEFORE_VOTE':
		return {
			...state,
			data: state.data.map(item => item._id === action.payload.post_id ? (
				{
					...item,
					before_votes: (item.before_votes
						.includes(action.payload.user_id) || item.after_votes
						.includes(action.payload.user_id))
						? item.before_votes : [...item.before_votes, action.payload.user_id]
				}
			) : item)
		}
	case 'AFTER_VOTE':
		return {
			...state,
			data: state.data.map(item => item._id === action.payload.post_id ? (
				{
					...item,
					after_votes: (item.after_votes
						.includes(action.payload.user_id) || item.before_votes
						.includes(action.payload.user_id))
						? item.after_votes : [...item.after_votes, action.payload.user_id]
				}
			) : item)
		}
	case 'LOADING_POSTS':
		return {
			loading: true
		}
	default:
		return state
	}
}
