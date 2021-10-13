import { convert } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import * as reviewActions from '../../../../store/review';
import md5 from 'md5';
export const Reviews = ({userId}) => {
    const { spotId } = useParams();
	let dispatch = useDispatch();
    const { reviews } = useSelector(state => state.review);
    const [newReview, setNewReview] = useState('');
    const [editing, setEditing] = useState(false);
    const [idInQuestion, setIdInQuestion] = useState(0);
    const [editReview, setEditReview] = useState('')

    const reviewPostHandler = (e) => {
        e.preventDefault();
        dispatch(reviewActions.addReview(+spotId, newReview, userId.id));
        setNewReview('');
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
    <>
        <div className='reviews'>
            {reviews?.map(e => (
                <div key={e.review}>
                    <img src={`http://www.gravatar.com/avatar/${md5(e.author.email)}`}></img>
                    <p>{e.author.username}</p>
                    <p>{convert(e.updatedAt)}</p>
                    {editing && e.id === idInQuestion?(
                        <form onSubmit={(event) => editReviewSubmitHandler(event, e)}>
                            <input value={editReview} onChange={(e) => setEditReview(e.target.value)}></input>
                            <button>Submit</button>
                        </form>
                    ):<p>{e.review}</p>}
                    {+e.author.id === +userId.id?(
                    <>
                        <p onClick={() => editReviewClickHandler(e)}>edit</p>
                        <p onClick={() => {deleteReviewHandler(e)}}>delete</p>
                    </>): null}
                </div>
            ))}
        </div>
        <form className='newReview' onSubmit={(e) => reviewPostHandler(e)}>
            <input value={newReview} onChange={(e) => setNewReview(e.target.value)}></input>
            <button>Submit</button>
        </form>
                </>
    )
}
