import './index.css'
import { Images } from './images'
import leatherSeats from '../../images/leatherSeats.png'
import wifi from '../../images/wifi.png'
import movieScreens from '../../images/movieScreens.png'
import cruiseControl from '../../images/cruiseControl.png'
import parkingAssist from '../../images/parkingAssist.png'
import _360degreeCamera from '../../images/360degreeCamera.png'
import nightVision from '../../images/nightVision.png'
import headsUpDisplay from '../../images/headsUpDisplay.png'
import drowsinessDetection from '../../images/drowsinessDetection.png'
import autonomousDriving from '../../images/autonomousDriving.png'
import antiCollisionDetectionSystem from '../../images/antiCollisionDetectionSystem.png'
import backUpCamera from '../../images/backUpCamera.png'
import { useState } from 'react'
import * as spotActions from '../../store/spot'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect } from 'react'


export const Host = ({userId}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mileage, setMilege] = useState('');
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
    const [featuresError, setFeaturesError] = useState('');

    const featureData = [
        {string: 'Leather Seats', url: leatherSeats},
        {string: 'Wifi', url: wifi},
        {string: 'Movie Screens in the Back', url: movieScreens},
        {string: 'Adaptive Cruise Controll', url: cruiseControl},
        {string: 'Parking Assist', url: parkingAssist},
        {string: '360 Degree Camera', url: _360degreeCamera},
        {string: 'Automotive Night Vision', url: nightVision},
        {string: 'Heads Up Display', url: headsUpDisplay},
        {string: 'Drowsiness Detection', url: drowsinessDetection},
        {string: 'Autonomous Driving', url: autonomousDriving},
        {string: 'Anti-Collision Warning System', url: antiCollisionDetectionSystem},
        {string: 'Back Up Camera', url: backUpCamera},
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
        console.log({title, description, mileage, year, pricePerDay, type, features, urls: urls.split('\n')})
        let payload = {userId: userId.id, title, description, mileage, year, pricePerDay, type, features: new Array(...features), urls: urls.split('\n')}
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
            setFeaturesError(state.errors.features)
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
    return (
        <form className='hostForm' onSubmit={(e) => formSubmitHandler(e)}>
            <label className='titleFormLabel'>Title</label>
            <input
            style={titleError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            className='titleForm'
            value={title}
            onChange={(e) => {setTitle(e.target.value); setTitleError('')}}
            placeholder={titleError?titleError: 'Title'}></input>
            <label className='descriptionFormLabel'>Description</label>
            <input
            style={descriptionError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            className='descriptionForm'
            value={description}
            onChange={(e) => {setDescription(e.target.value); setDescriptionError('')}}
            placeholder={descriptionError?descriptionError:'Description'}></input>

            <div className='mainDetailsForm'>
                <div>
                    <label>mileage</label>
                    <input
                    style={mileageError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
                    value={mileage}
                    onChange={(e) => {setMilege(e.target.value);setMileageError('') }} placeholder={mileageError?mileageError: 'Miles'}></input>
                </div>
                <div>
                    <label>Year</label>
                    <input
                    style={yearError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
                    value={year}
                    onChange={(e) => {setYear(e.target.value); setYearError('')}} placeholder={yearError?yearError: 'Years'}></input>
                </div>
                <div>
                    <label>Price</label>
                    <input
                    style={priceError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
                    value={year}
                    value={pricePerDay}
                    onChange={(e) => {setPricePerDay(e.target.value); setPriceError('')}}
                    placeholder={priceError?priceError: 'price'}></input>
                </div>
            </div>
            <div className='carData'>
                <div>
                    <h2 style={typeError?{backgroundColor: 'pink', width: '270px'}: {backgroundColor: 'white'}}>{typeError?typeError:'Pick a Car type'}</h2>
                    <div className='carTypes'>
                        {types.map(e =>
                        <p key={e.id} className={type === e.id? 'activeType': null} onClick={() => {carTypeClickHandler(e.id); setTypeError('')}}>{e.string}</p>
                        )}
                    </div>
                </div>
                <div>
                    <h2>{`${featuresError? featuresError: ''}`}</h2>
                    <div className='carFeatures'>
                        {featureData.map(e =>(
                            <p
                            key={e.string}
                            className={features.has(e.string)? 'activeFeature': null }
                            onClick={() => carFeaturesClickHandler(e.string)}>{e.string}</p>
                            ))}
                    </div>
                </div>
            </div>
                        <div className='mainImagesDiv'>
                            <Images urls={urls} setUrls={setUrls} urlsError={urlsError} setUrlsError={setUrlsError}/>
                        </div>
                <button className='formSubmit'>Submit</button>
        </form>
    )
}
