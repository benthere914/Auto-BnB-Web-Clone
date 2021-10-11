import { csrfFetch } from './csrf';

const LOAD = 'spot/load';


const loadAllSpots = (payload) => {
    return {
        type: LOAD,
        payload
    }
}


export const loadSpots = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/types/${id}/spots`);
    console.log(response);
	const data = await response.json();
    console.log(data)
	dispatch(loadAllSpots(data));
	return response;
};


const spotReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD:
            console.log('got here')
            const newState = {};
            action.payload.data.forEach(e => newState[e.id] = e);
            return newState;
        default:
            return state;
    }
}

export default spotReducer
