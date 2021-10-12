import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as spotActions from '../../store/spot'
export const Spot = () => {
    let dispatch = useDispatch();
    const {spotId} = useParams();
    useEffect(() => {dispatch(spotActions.loadSpot(+spotId))}, [dispatch])
    const state = useSelector(state => state.spot);
    console.log(state)
    return (<h1>{spotId}</h1>)
}
