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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mileage, setMilege] = useState('');
    const [year, setYear] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [type, setType] = useState(0);
    const [features, setFeatures] = useState(new Set());
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
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6}
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
        dispatch(spotActions.addSpot(payload))
    }

    useEffect(() => {
        console.log(state);
        if (state.errors){

        }
        if (state.message){
            history.push(`/spots/${state.spotId}`)
        }
    }, [state])
    return (
        <form className='hostForm' onSubmit={(e) => formSubmitHandler(e)}>
            <label className='titleFormLabel'>Title</label>
            <input className='titleForm' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'></input>
            <label className='descriptionFormLabel'>Description</label>
            <input className='descriptionForm' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'></input>

            <div className='mainDetailsForm'>
                <div>
                    <label>mileage</label>
                    <input value={mileage} onChange={(e) => setMilege(e.target.value)} placeholder='mileage'></input>
                </div>
                <div>
                    <label>Year</label>
                    <input value={year} onChange={(e) => setYear(e.target.value)} placeholder='year'></input>
                </div>
                <div>
                    <label>Price</label>
                    <input value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} placeholder='Price'></input>
                </div>
            </div>
            <div className='carData'>
                <div className='carTypes'>
                    {types.map(e =>
                    <img key={e.id} className={type === e.id? 'activeType': null} onClick={() => carTypeClickHandler(e.id)}></img>
                        )}

                </div>

                <div className='carFeatures'>
                    {featureData.map(e =>(
                    <img
                    key={e.string}
                    className={features.has(e.string)? 'activeFeature': null }
                    src={e.url}
                    alt={e.string}
                    onClick={() => carFeaturesClickHandler(e.string)}/>
                    ))}


                </div>
            </div>
                        <div className='mainImagesDiv'>
                            <Images urls={urls} setUrls={setUrls}/>
                        </div>
                <button className='formSubmit'>Submit</button>
        </form>
    )
}
