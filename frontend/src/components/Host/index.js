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
import { useHistory } from 'react-router'
import { useEffect } from 'react'


export const Host = ({userId}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mileage, setMileage] = useState('');
    const [year, setYear] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [type, setType] = useState(0);
    const [features, setFeatures] = useState(new Set());
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [mileageError, setMileageError] = useState('');
    const [yearError, setYearError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [urlsError, setUrlsError] = useState('');
    const [pictureModal, setPictureModal] = useState(false);
    const [featuresError, setFeaturesError] = useState('');

    const featureData = [
        {string: 'Leather Seats' },
        {string: 'Wifi'},
        {string: 'Movie Screens in the Back'},
        {string: 'Adaptive Cruise Controll'},
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
        console.log({title, description, mileage, year, pricePerDay, type, features, urls: urls.split(',')})
        let payload = {userId: userId.id, title, description, mileage, year, pricePerDay, type, features: new Array(...features), urls: urls.split(',')}
        dispatch(spotActions.addSpot(payload));
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
                            <Urls data={{urls, setUrls, urlsError}}/>
                            <Images data={{urls, setPictureModal, openPictureModalHandler}}/>
                        </div>
                <button className='formSubmit'>Submit</button>
        </form>
        </>
    )
}
