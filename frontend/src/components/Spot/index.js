import './index.css';
import { convert } from '../../utils/date';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review';
import * as sessionActions from '../../store/session';
import md5 from 'md5';
export const Spot = ({userId}) => {
    const { spotId } = useParams();
	let dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(false);
    const [secLoad, setSecLoad] = useState(false);
	useEffect(() => {dispatch(spotActions.loadSpot(+spotId)).then(() => setFirstLoad(true))}, [dispatch, spotId]);
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId)).then(() => setSecLoad(true))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const { reviews } = useSelector(state => state.review);
    const [newReview, setNewReview] = useState('');
    const [imgIndex, setImgIndex] = useState(0);
    const [editing, setEditing] = useState(false);
    const [idInQuestion, setIdInQuestion] = useState(0);
    const [editReview, setEditReview] = useState('')


    const reviewPostHandler = () => {
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
        {
            firstLoad && secLoad?(
			<div className='mainSpotPage'>
				<div className='leftSide'>
				<h1 className='spotTitle'>{data?.title} by {data?.author.username}</h1>
					<img className='spotImage' src={data?.images[imgIndex].url} alt={data?.images[imgIndex].alt}></img>
				</div>

                <div className='rightSide'>
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
                                {/* <p>{e.review}</p> */}
                                {+e.author.id === +userId.id?(
                                    <>
                                    <p onClick={() => editReviewClickHandler(e)}>edit</p>
                                    <p onClick={() => {deleteReviewHandler(e)}}>delete</p>
                                    </>)
                                    : null}
                            </div>
                            ))}
                    </div>
                    <div className='newReview'>
                        <input value={newReview} onChange={(e) => setNewReview(e.target.value)}></input>
                        <button onClick={() => {reviewPostHandler()}}>Submit</button>
                    </div>
                    <div className='bookAppointment'>

                    </div>
                </div>
			</div>)
                        : null}
		</>
	);
};
