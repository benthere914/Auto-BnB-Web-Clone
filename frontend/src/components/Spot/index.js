import './index.css';
import { RightSidePost } from './RightSidePost';
import { LeftSidePost } from './LeftSidePost';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review';
export const Spot = ({userId}) => {
    const { spotId } = useParams();
	let dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(false);
    const [secLoad, setSecLoad] = useState(false);
	useEffect(() => {dispatch(spotActions.loadSpot(+spotId)).then(() => setFirstLoad(true))}, [dispatch, spotId]);
    useEffect(() => {dispatch(reviewActions.loadReviews(+spotId)).then(() => setSecLoad(true))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const [imgIndex, setImgIndex] = useState(0);



	return (
		<>
        {
            firstLoad && secLoad?(
			<div className='mainSpotPage'>
                <LeftSidePost allData={{data, imgIndex, setImgIndex}}/>
                <RightSidePost userId={userId}/>
			</div>)
                        : null}
		</>
	);
};
