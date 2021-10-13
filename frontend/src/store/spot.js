import { csrfFetch } from './csrf';

const LOADAll = 'spot/load/all';
const LOADONE = 'spot/load/one';
const ADDONE = 'spot/add/one';


const loadAllSpots = (payload) => {
    return {
        type: LOADAll,
        payload
    }
}

const loadOneSpot = (payload) => {
    return {
        type: LOADONE,
        payload
    }
}

const add_spot = (payload) => {
    return {
        type: ADDONE,
        payload
    }
}





export const loadSpots = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/types/${id}/spots`);
	const data = await response.json();
	dispatch(loadAllSpots(data));
	return response;
};

export const loadSpot = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots/${+id}`);
	const data = await response.json();
	dispatch(loadOneSpot(data));
	return response;
};

export const addSpot = (payload) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots`, {'method': 'POST', 'body': JSON.stringify(payload)});
	const data = await response.json();
	dispatch(add_spot(data));
	return response;
};


const spotReducer = (state = {}, action) => {
    const newState = {};
    switch(action.type){
        case LOADAll:
            action.payload.data.forEach(e => newState[e.spotId] = e);
            return newState;
        case LOADONE:
            return action.payload
        case ADDONE:
            return action.payload
        default:
            return state;
    }
}

export default spotReducer
