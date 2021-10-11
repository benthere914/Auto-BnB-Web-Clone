import { Top } from "./Top"
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { useEffect, state } from "react";
import * as spotActions from '../../store/spot'

export const Spots = () => {
    const dispatch = useDispatch();
    let spots;
    const { typeId } = useParams();
    useEffect(() => {
        dispatch(spotActions.loadSpots(typeId)).then(e => console.log(e))

    });
    return (
        <Top/>
    )
}
