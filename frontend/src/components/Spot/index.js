import './index.css';
import { SecondaryData } from './SecondaryData';
import { PrimaryData } from './PrimaryData';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review';
import { DeleteModal } from './DeleteModal';
import { useHistory } from 'react-router-dom';

export const Spot = ({userId}) => {
    const history = useHistory();
    const { spotId } = useParams();
	let dispatch = useDispatch();
    const [deleteModal, setDeleteModal] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const deleteClickHandler = () => {
        dispatch(spotActions.deleteOneSpot(spotId))
        history.push('/')
    }

	useEffect(() => {dispatch(spotActions.loadSpot(+spotId)).then(() => setFirstLoad(true))}, [dispatch, spotId]);
	const { data } = useSelector((state) => state.spot);
    const [imgIndex, setImgIndex] = useState(0);
    const closeDeleteModalHandler = () => {
        if (deleteModal){
            setDeleteModal(false)
        }
    }

    const openDeleteModalHandler = () => {
        setDeleteModal(true);
    }


	return (
		<>
        {deleteModal && <DeleteModal funcs={{closeDeleteModalHandler, deleteClickHandler}}/>}
        {
            firstLoad?(
			<div className='mainSpotPage' onClick={() => {closeDeleteModalHandler()}}>
                <PrimaryData allData={{userId, data, imgIndex, setImgIndex, openDeleteModalHandler}}/>
                <SecondaryData allData={{userId, data}}/>
			</div>)
                        : null}
		</>
	);
};
