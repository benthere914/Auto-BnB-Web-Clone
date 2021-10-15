import { convert } from '../../../../utils/date';
import { NotLoggedInModal } from './NotLoggedInModal';
import uuid from 'react-uuid'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import * as reviewActions from '../../../../store/review';
import md5 from 'md5';
import { useEffect } from 'react';

export const Reviews = ({userId}) => {
    let dispatch = useDispatch();
    const { spotId } = useParams();
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId))}, [dispatch, spotId]);
    if (!userId){
        userId = {id: 0, username: 'anonymous'}
    }
    const { reviews } = useSelector(state => state.review);
    const [newReview, setNewReview] = useState('');
    const [editing, setEditing] = useState(false);
    const [idInQuestion, setIdInQuestion] = useState(0);
    const [notLoggedInModal, setNotLoggedInModal] = useState(false);
    const [editReview, setEditReview] = useState('');
    const [a, setA] = useState('')


    const reviewPostHandler = (e) => {
        e.preventDefault();
        dispatch(reviewActions.addReview(+spotId, newReview, userId.id)).then((e) =>
        {
            console.log(e.errors)
            if (e.errors){
                if (e.errors.user === 'not logged in'){
                    setNotLoggedInModal(true);
                    setNewReview('');
                    setTimeout(() => {setNotLoggedInModal(false)}, 3000)
                }
            }
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
        {notLoggedInModal && <NotLoggedInModal allData={{ notLoggedInModal}}/>}
        <form className='newReview' onSubmit={(e) => reviewPostHandler(e)}>
            <label>Have you already leased this vehicle? Leave a review below.</label>
            <input value={newReview} onChange={(e) => setNewReview(e.target.value)}></input>
            <button>Submit</button>

        </form>
        <div>

            {reviews?.map((e)=>(
                <div className='reviewDiv' key={uuid()}>
                    <input value={a} onChange={(e) => {setA(e.target.value)}}></input>

                    {(!editing) || (editing && e.id !== idInQuestion)?<img alt='author' className='authorPhoto' src={`https://www.gravatar.com/avatar/${md5(e.author.email)}`}></img>:null}

                    <div key={uuid()} className='reviewText'>

                        {(!editing) || (editing && e.id !== idInQuestion)?(

                            <div className='topOfReview'>
                                <p className='username'>{e.author.username}</p>
                                <p className='date'>{convert(e.updatedAt)}</p>
                            </div>

                        ): null}


                        {(editing && e.id === idInQuestion)?(

                            <form key={uuid()} className='editReview' onSubmit={(event) => editReviewSubmitHandler(event, e)}>
                                <input value={editReview} onChange={(event) => {setEditReview(event.target.value); console.log(editing, e.id, idInQuestion, editReview)}}></input>
                                <button>Submit</button>
                            </form>

                        ):

                            <p className='review' >{e.review}</p>}

                        {(!editing && +e.author.id === +userId.id) || (e.id !== idInQuestion && +e.author.id === +userId.id)?(

                            <div key={uuid()} className='editReviewLinks'>
                                <p className='editReviewLink' onClick={() => editReviewClickHandler(e)}>edit</p>
                                <p className='editReviewLink' onClick={() => deleteReviewHandler(e)}>delete</p>
                            </div>

                        ): null}

                    </div>
                </div>
            ))}
        </div>

                </div>
    )
}
