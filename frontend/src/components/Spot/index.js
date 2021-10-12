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
	let dispatch = useDispatch();
	const { spotId } = useParams();
    const [firstLoad, setFirstLoad] = useState(false);
    const [secLoad, setSecLoad] = useState(false);
	useEffect(() => {dispatch(spotActions.loadSpot(+spotId)).then(() => setFirstLoad(true))}, [dispatch, spotId]);
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId)).then(() => setSecLoad(true))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const { reviews } = useSelector(state => state.review)
    const [newReview, setNewReview] = useState('');
    const [imgIndex, setImgIndex] = useState(0);

    const reviewPostHandler = () => {
        dispatch(reviewActions.addReview(+spotId, newReview, userId.id))
    }

    const deleteReviewHandlere = (e) => {
        console.log(e)
        dispatch(reviewActions.deleteReview(e.id))
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

                            <>
                            <img src={`http://www.gravatar.com/avatar/${md5(e.author.email)}`}></img>
                            <p>{e.author.username}</p>
                            <p>{convert(e.updatedAt)}</p>
                            <p></p>
                            </>
                            ))}
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
