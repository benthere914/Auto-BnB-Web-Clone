import { Top } from "./Top"
import { Cards } from "./Cards";
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, state } from "react";
import * as spotActions from '../../store/spot'

export const Spots = () => {
    const dispatch = useDispatch();
    const { typeId } = useParams();
    useEffect(() => {
        dispatch(spotActions.loadSpots(typeId))
    }, []);
    let spots = useSelector(state => state.spot);
    let arr = Object.entries(spots);
    let length;
    let type;
    if(arr[0]){
        length = arr.length - 1;
        type = arr[0][1].Type;
    }

    return (
        <>
            <Top data={{length, type}}/>
            <Cards data={arr}/>
        </>
    )
}
