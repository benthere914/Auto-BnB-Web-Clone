import { csrfFetch } from './csrf';

const ALTER_USER = 'user/alterUser'

const alterUser = (userData, data) => {
    return {
        type: ALTER_USER,
        payload: {userData, data}
    }
}

export const changeUsername = (id, username) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify({username})
    })

    const data = await response.json();
    dispatch(alterUser('username', data))
}

const userReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type){
        case ALTER_USER:
			newState.user[action.payload.userData] = action.payload.data;
			return newState;
        default:
            return state
    }
}

export default userReducer
