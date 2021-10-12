import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
export const Spot = () => {
	let dispatch = useDispatch();
	const { spotId } = useParams();
	useEffect(() => {
		dispatch(spotActions.loadSpot(+spotId));
	}, [dispatch]);
	const { data } = useSelector((state) => state.spot);
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
			</div>
		</>
	);
};
