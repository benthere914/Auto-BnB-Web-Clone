import { csrfFetch } from './csrf';

const LOADAll = 'spot/load/all';
const LOADONE = 'spot/load/one';
const ADDONE = 'spot/add/one';
const RESET = 'spot/reset';
const EDITONE = 'spot/reset/one';
const DELETEONE = 'spot/delete/one';

const delete_one_spot = (payload) => {
    return {
        type: DELETEONE,
        payload
    }
}


const loadAllSpots = (payload) => {
    return {
        type: LOADAll,
        payload
    }
}

const edit_one_spot = (payload) => {
    return {
        type: EDITONE,
        payload
    }
}

const load_one_spot = (payload) => {
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

const reset_spot = () => {
    return {
        type: RESET
    }
}

export const deleteOneSpot = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots/${id}`, {'method': 'DELETE'});
	const data = await response.json();
	dispatch(delete_one_spot(data));
	return response;
};


export const loadSpots = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/types/${id}/spots`);
	const data = await response.json();
	dispatch(loadAllSpots(data));
	return response;
};

export const editSpot = (id, payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {'method': 'PUT', 'body': JSON.stringify(payload)});
    const data = await response.json();
    dispatch(edit_one_spot(data));
    return data;
}

export const loadSpot = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots/${+id}`);
	const data = await response.json();
	dispatch(load_one_spot(data));
	return response;
};

export const addSpot = (payload) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots`, {'method': 'POST', 'body': JSON.stringify(payload)});
	const data = await response.json();
	dispatch(add_spot(data));
	return data;
};

export const resetSpot = () => async (dispatch) => {
    dispatch(reset_spot())
    return
}


const spotReducer = (state = {}, action) => {
    const newState = {};
    switch(action.type){
        case LOADAll:
            action.payload.data.forEach(e => newState[e.spotId] = e);
            return newState;
        case LOADONE:
            return action.payload;
        case ADDONE:
            return action.payload;
        case EDITONE:
            return action.payload;
        case DELETEONE:
            return action.payload;
        case RESET:
            return {};
        default:
            return state;
    }
}

export default spotReducer
