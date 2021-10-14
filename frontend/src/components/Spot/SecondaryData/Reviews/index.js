import { convert } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as reviewActions from '../../../../store/review';
import md5 from 'md5';
import { useEffect } from 'react';
import { EditReview } from './EditReview';
import { EditLinks } from './EditLinks';
export const Reviews = ({userId}) => {
    let dispatch = useDispatch();
    const { spotId } = useParams();
    const [secLoad, setSecLoad] = useState(false);
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId)).then(() => setSecLoad(true))}, [dispatch, spotId]);
    if (!userId){
        userId = {id: 0, username: 'anonymous'}
    }
    const { reviews } = useSelector(state => state.review);
    const [newReview, setNewReview] = useState('');
    const [editing, setEditing] = useState(false);
    const [idInQuestion, setIdInQuestion] = useState(0);
    const [editReview, setEditReview] = useState('');
    const [error, setError] = useState('')
    console.log(reviews)
    const reviewPostHandler = (e) => {
        e.preventDefault();
        dispatch(reviewActions.addReview(+spotId, newReview, userId.id)).then((e) =>

        {
            if (e.error === 'must be logged in'){}
            setNewReview('');
        }
        );
    }

    const deleteReviewHandler = (e) => {
        dispatch(reviewActions.deleteReview(e.id))
    }

    const editReviewClickHandler = (e) => {
        setIdInQuestion(e.id);
        setEditReview(e.review);
        setEditing(true);
    }

    const editReviewSubmitHandler = (event, e) => {
        event.preventDefault();
        dispatch(reviewActions.editReview(e.id, editReview));
        setEditing(false);
        setIdInQuestion(0)
    }

return (
    <div>
        <form className='newReview' onSubmit={(e) => reviewPostHandler(e)}>
            <label>Have you already leased this vehicle? Leave a review below.</label>
            <input value={newReview} onChange={(e) => setNewReview(e.target.value)}></input>
            <button>Submit</button>
        </form>
        <div>
            {reviews?.map((e)=>(
                <div className='reviewDiv'>
                    <img className='authorPhoto' src={`https://www.gravatar.com/avatar/${md5(e.author.email)}`}></img>
                    <div className='reviewText'>
                        <div className='topOfReview'>
                            <p className='username'>{e.author.username}</p>
                            <p className='date'>{convert(e.updatedAt)}</p>
                        </div>
                        {editing && e.id === idInQuestion?(<EditReview data={{editReviewSubmitHandler, setEditReview, e, editReview}}/>):<p className='review' >{e.review}</p>}
                        {+e.author.id === +userId.id?(<EditLinks data={{editReviewClickHandler, deleteReviewHandler, e}}/>): null}
                    </div>
                </div>
            ))}
        </div>

                </div>
    )
}
