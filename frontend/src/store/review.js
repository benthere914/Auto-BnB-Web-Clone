import { csrfFetch } from './csrf';


const LOADAll = 'reviews/load'
const ADDREVIEW = 'reviews/add'
const DELETE_REVIEW ='reviews/delete'

const load_reviews = (payload) => {
    return {
        type: LOADAll,
        payload
    }
}

const add_Review = (payload) => {
    return {
        type: ADDREVIEW,
        payload
    }
}

const delete_review = (payload) => {
    return {
        type: LOADAll,
        payload
    }
}

export const loadReviews = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/spots/${id}/reviews`);
	const data = await response.json();
	dispatch(load_reviews(data));
	return response;
};


export const addReview = (spotId, review, userId) => async (dispatch) => {
	const response = await csrfFetch(`/api/reviews`, {'method': 'POST', 'body': JSON.stringify({spotId, review, userId})});
	const data = await response.json();
	dispatch(add_Review(data));
	return response;
};

export const deleteReview = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/reviews/${id}`);
	const data = await response.json();
	dispatch(delete_review(data));
	return response;
};

const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case LOADAll:
            return action.payload;
        case ADDREVIEW:
            return action.payload;
        default:
            return state;
    }
}

export default reviewReducer;
