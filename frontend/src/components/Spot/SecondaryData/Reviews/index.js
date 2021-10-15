import { convert } from '../../../../utils/date';
import { ErrorModal } from './ErrorModal';
// import uuid from 'react-uuid'
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
    const [errorModal, setErrorModal] = useState(false);
    const [editReview, setEditReview] = useState('');
    const [resizeTextArea, setResizeTextArea] = useState(false);
    const [error, setError] = useState('')



    const reviewPostHandler = (e) => {
        e.preventDefault();
        setNewReview('');
        if(resizeTextArea === 'down'){setResizeTextArea('up');}
        if (!errorModal){
            dispatch(reviewActions.addReview(+spotId, newReview, userId.id)).then((e) =>
                {
                    console.log(e.errors)
                    if (e.errors){
                        if (e.errors.user === 'not logged in'){
                            setError('You are not logged in. You must be logged in to leave a review');
                        }
                        else if (e.errors.review === 'not a valid review'){
                            setError('You have not typed a valid review. Please check your review and try again');

                        }
                        else if (e.errors.page === 'not a valid spot'){
                            setError('The page you are on no longer exists please reload the page to try again');
                        }
                        else{
                            setError('There was an unexpected error. Please try again later.')
                        }
                        setErrorModal(true);
                        setTimeout(() => {setErrorModal(false)}, 5000)
                    }
                }
            );
        }
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
    useEffect(()=> {
        if (resizeTextArea === 'up'){
            setTimeout(() => {setResizeTextArea(false)}, 1000)
        }
    }, [resizeTextArea])
return (
    <div>
        {errorModal && <ErrorModal allData={{ errorModal, error}}/>}
        <form className='newReview' onSubmit={(e) => {e.preventDefault(); setNewReview(''); console.log(e)}}>
            <label>Have you already leased this vehicle? Leave a review below.</label>
            <textarea className={resizeTextArea === 'up'?'resizeTextAreaUp':resizeTextArea === 'down'? 'resizeTextAreaDown':null} onBlur={() => {if (resizeTextArea === 'down'){setResizeTextArea('up')}}} onClick={() => {setResizeTextArea('down')}} value={newReview} onChange={(e) => setNewReview(e.target.value)}></textarea>
            <button onMouseDown={(e) => {reviewPostHandler(e)}}>Submit</button>

        </form>
        <div className='reviews'>

            {reviews?.map((e)=>(


                <div className='reviewDiv' key={e.id}>

                    {(!editing) || (editing && e.id !== idInQuestion)?<div className='authorPhotoDiv'><img alt='author' className='authorPhoto' src={`https://www.gravatar.com/avatar/${md5(e.author.email)}`}></img></div>:null}

                    <div className='reviewText'>

                        {(!editing) || (editing && e.id !== idInQuestion)?(

                            <div className='topOfReview'>
                                <p className='username'>{e.author.username}</p>
                                <p className='date'>{convert(e.updatedAt)}</p>
                            </div>

                        ): null}


                        {(editing && e.id === idInQuestion)?(

                            <form className='editReview' onSubmit={(event) => editReviewSubmitHandler(event, e)}>
                                <textarea value={editReview} onChange={(event) => {setEditReview(event.target.value); console.log(event.target.scrollHeight)}} ></textarea>
                                <div>
                                    <button>Submit</button>
                                    <button type='button' onClick={() => {setEditing(false); setEditReview('')}}>Back</button>
                                </div>
                            </form>

                        ):

                            <p className='review' >{e.review}</p>}

                        {(!editing && +e.author.id === +userId.id) || (e.id !== idInQuestion && +e.author.id === +userId.id)?(

                            <div className='editReviewLinks'>
                                <p className='editReviewLink' onMouseDown={() => editReviewClickHandler(e)}>edit</p>
                                <p className='editReviewLink' onMouseDown={() => deleteReviewHandler(e)}>delete</p>
                            </div>

                        ): null}

                    </div>
                </div>

            ))}
        </div>

                </div>
    )
}
