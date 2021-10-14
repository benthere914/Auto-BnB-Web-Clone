import './index.css'
import { Images } from './Images/ index'
import { Urls} from './Urls'
import { Title } from './Title'
import { Description } from './Description'
import { Price } from './Price'
import { Mileage } from './Mileage'
import { Year } from './Year'
import { Types } from './Types'
import { Features } from './Features'
import { PictureModal } from './PictureModal'
import { useState } from 'react'
import * as spotActions from '../../store/spot'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export const Host = ({userId, getExtraData}) => {
    const params = useParams();
    let extraData = {};
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spot)
    const history = useHistory();
    const [title, setTitle] = useState(extraData.title || '');
    const [description, setDescription] = useState(extraData.description || '');
    const [mileage, setMileage] = useState(extraData.mileage || '');
    const [year, setYear] = useState(extraData.year || '');
    const [pricePerDay, setPricePerDay] = useState(extraData.pricePerDay || '');
    const [type, setType] = useState(extraData.type || 0);
    const [features, setFeatures] = useState(extraData.features || new Set());
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [mileageError, setMileageError] = useState('');
    const [yearError, setYearError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [urlsError, setUrlsError] = useState('');
    const [pictureModal, setPictureModal] = useState(false);
    const [featuresError, setFeaturesError] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');

    const featureData = [
        {string: 'Leather Seats' },
        {string: 'Wifi'},
        {string: 'Movie Screens in the back'},
        {string: 'Adaptive Cruise Control'},
        {string: 'Parking Assist'},
        {string: '360 Degree Camera'},
        {string: 'Automotive Night Vision'},
        {string: 'Heads Up Display'},
        {string: 'Drowsiness Detection'},
        {string: 'Autonomous Driving'},
        {string: 'Anti-Collision Warning System'},
        {string: 'Back Up Camera'},
    ];

    const types = [
        {id: 1, string: 'Sports Cars'},
        {id: 2, string: 'Family Cars'},
        {id: 3, string: 'Trucks'},
        {id: 4, string: 'Off Roading Vehicles'},
        {id: 5, string: 'Electric Cars'},
        {id: 6, string: 'Sedans'}
    ]
    const [urls, setUrls] = useState('')

    const carTypeClickHandler = (selection) => {
        setType(selection)
    }
    const carFeaturesClickHandler = (selection) => {
        if (features.has(selection)){
            setFeatures((features) => new Set([...features].filter(x => x !== selection)))
            return
        }
        setFeatures((features) => new Set(features.add(selection)))

    }
    let state = useSelector(state => state.spot);
    const formSubmitHandler = (e) => {
        e.preventDefault();
        let payload = {userId: userId.id, title, description, mileage, year, pricePerDay, type, features: new Array(...features), urls: urls.split(',')}
        if (getExtraData){dispatch(spotActions.editSpot(params.spotId, payload))}
        else{dispatch(spotActions.addSpot(payload))};
    }

    useEffect(() => {
        if (state.errors){
            setTitleError(state.errors.title);
            setDescriptionError(state.errors.description);
            setMileageError(state.errors.mileage);
            setYearError(state.errors.year);
            setTypeError(state.errors.type);
            setUrlsError(state.errors.urls);
            setPriceError(state.errors.price);
            setFeaturesError(state.errors.features);
        }
        if (!state.errors){
            setTitleError('');
            setDescriptionError('');
            setMileageError('');
            setYearError('');
            setTypeError('');
            setUrlsError('');
            setPriceError('');
            setFeaturesError('');
        }
        if (state.message){
            history.push(`/spots/${state.spotId}`)
        }
    }, [state])
    const closeModalHandler = () => {
        if (pictureModal){
            setPictureModal(false);
        }
    }

    const openPictureModalHandler = () => {
        if (!pictureModal && urls.length){
            setPictureModal(true)
        }
    }
    const [getData, setGetData] = useState(false);
    useEffect(() => {
        if (getExtraData){
            dispatch(spotActions.loadSpot(params.spotId)).then(() => {
            setGetData(true);
            })
        }
    }, [])

    useEffect(() => {
        if (getData && getExtraData){
            console.log(spot)
            setTitle(spot.data.title);
            setDescription(spot.data.description);
            setMileage(spot.data.mileage);
            setYear(spot.data.year);
            setPricePerDay(spot.data.pricePerDay);
            setType(spot.data.typeId);
            setFeatures(new Set(spot.data.features));
            let urlFuncs = [setInput1, setInput2, setInput3, setInput4, setInput5, setInput6, setInput7];
            for (let i = 0; i < spot.data.images.length; i++){
                urlFuncs[i](spot.data.images[i].url)
            }
        }

    }, [getData])
    return (
        <>
        {pictureModal?<PictureModal data={{urls}}/>:null}
        <form className='hostForm' onSubmit={(e) => formSubmitHandler(e)} onClick={() => {closeModalHandler()}}>
            <Title data={{title, titleError, setTitle, setTitleError}}/>
            <Description data={{description, descriptionError, setDescription, setDescriptionError}}/>
            <div className='mainDetailsForm'>
                <Mileage data={{mileage, mileageError, setMileage, setMileageError}}/>
                <Year data={{year, yearError, setYearError, setYear}}/>
                <Price data={{pricePerDay, setPricePerDay, priceError, setPriceError}}/>

            </div>
            <div className='carData'>
                <Types data={{typeError, types, type, carTypeClickHandler, setTypeError}}/>
                <Features data={{featuresError, featureData, features, carFeaturesClickHandler}}/>
            </div>
                        <div className='mainImagesDiv'>
                            <Urls allData={{
            input1, setInput1,
            input2, setInput2,
            input3, setInput3,
            input4, setInput4,
            input5, setInput5,
            input6, setInput6,
            input7, setInput7,
            urls, setUrls,
            urlsError
        }}/>
                            <Images data={{urls, setPictureModal, openPictureModalHandler}}/>
                        </div>
                <button className='formSubmit'>Submit</button>
        </form>
        </>
    )
}
