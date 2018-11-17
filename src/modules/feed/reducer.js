import isEmpty from '../../utils/isEmpty'

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
			data: state.data.map(item => (item._voter === action.payload._voter ? {
				...item,
				before_votes: isEmpty(item.before_votes)
					? [...item.before_votes, action.payload]
					: item.before_votes.map(item => item._id === action.payload._voter
						? { ...item, voted: !item.voted } : item),
				after_votes: isEmpty(item.after_votes)
					? [...item.after_votes, { _voter: action.payload._voter, voted: false }]
					: item.after_votes.map(item => item._id === action.payload._voter
						? { ...item, voted: !item.voted } : item)
			} : item))
		}
	case 'AFTER_VOTE':
		return {
			...state,
			data: state.data.map(item => (item._voter === action.payload._voter ? {
				...item,
				after_votes: isEmpty(item.after_votes)
					? [...item.after_votes, action.payload]
					: item.after_votes.map(item => item._id === action.payload._voter
						? { ...item, voted: !item.voted } : item),
				before_votes: isEmpty(item.before_votes)
					? [...item.before_votes, { _voter: action.payload._voter, voted: false }]
					: item.before_votes.map(item => item._id === action.payload._voter
						? { ...item, voted: !item.voted } : item)
			} : item))
		}
	case 'LOADING_POSTS':
		return {
			...state,
			loading: true
		}
	default:
		return state
	}
}
