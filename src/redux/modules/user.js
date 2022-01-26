// Actions
const CREATE = 'user/CREATE';
const DELETE = 'user/DELETE';

const initialState = {
	email: ""
}

// Action Creators
export function newEmail(email) {
	return {type: CREATE, email: email};
}

//reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		// do reducer stuff
		case CREATE: {
			const new_email = action.email;
			return {email : new_email};
		} 
		case DELETE: {
			console.log(state, action);
			const new_bucket_list = state.list.filter((l, idx) => {
				// console.log(parseInt(action.bucket_index) !== idx, parseInt(action.bucket_index), idx);
				return parseInt(action.bucket_index) !== idx;
			});
			console.log(new_bucket_list);
			return {list: new_bucket_list}
		}

		default:
			return state;
	}
}