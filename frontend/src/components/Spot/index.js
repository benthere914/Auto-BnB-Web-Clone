import './index.css';
import { SecondaryData } from './SecondaryData';
import { PrimaryData } from './PrimaryData';
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

	useEffect(() => {dispatch(spotActions.loadSpot(+spotId)).then(() => setFirstLoad(true))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const [imgIndex, setImgIndex] = useState(0);



	return (
		<>
        {
            firstLoad?(
			<div className='mainSpotPage'>
                <PrimaryData allData={{userId, data, imgIndex, setImgIndex}}/>
                <SecondaryData allData={{userId, data}}/>
			</div>)
                        : null}
		</>
	);
};
