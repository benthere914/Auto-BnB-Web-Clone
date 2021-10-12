import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review';
import * as sessionActions from '../../store/session';
export const Spot = ({userId}) => {
	let dispatch = useDispatch();
	const { spotId } = useParams();
	useEffect(() => {dispatch(spotActions.loadSpot(+spotId));}, [dispatch, spotId]);
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const { reviews } = useSelector(state => state.review)
    const [newReview, setNewReview] = useState('');

    const reviewPostHandler = () => {
        dispatch(reviewActions.addReview(+spotId, newReview, userId.id))
    }



	return (
		<>
			<div>
				<div>
					<h1>
						{data?.title} by {data?.author.username}
					</h1>
				</div>
				<div>
					{data?.images.map((e) => (
						<img src={e.url} alt={e.alt}></img>
					))}
				</div>
				<div>
					<h3>{`Wonderful ${data?.type} hosted by ${data?.author.username}`}</h3>
				</div>
                <div>
                    <h2>Reviews</h2>
                {reviews?.map(e => <h3>{e.review}</h3>)}

                    <input value={newReview} onChange={(e) => setNewReview(e.target.value)}></input>
                    <button onClick={() => {reviewPostHandler()}}>Submit</button>
                </div>
			</div>
		</>
	);
};
