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
	const data = await response.json();
	dispatch(loadAllSpots(data));
	return response;
};


const spotReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD:
            const newState = {};
            action.payload.data.forEach(e => newState[e.id] = e);
            return newState;
        default:
            return state;
    }
}

export default spotReducer
