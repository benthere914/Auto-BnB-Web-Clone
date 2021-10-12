import './index.css'
import { useState } from 'react'


export const Host = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mileage, setMilege] = useState('');
    const [year, setYear] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [type, setType] = useState(0);
    const [features, setFeatures] = useState(new Set());
    const [update, setUpdate] = useState(1);

    const carTypeClickHandler = (selection) => {
        setType(selection)
    }
    const carFeaturesClickHandler = (selection) => {
        if (features.has(selection)){
            setFeatures((features) => {features.delete(selection); return features})
            return
        }
        setFeatures((features) => features.add(selection))
        setUpdate((count) => count + 1)

    }
    return (
        <form>
            <input value={title} onChange={(e) => setTitle(e.target.value)}></input>

            <input value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <div>
                <input value={mileage} onChange={(e) => setMilege(e.target.value)}></input>
                <input value={year} onChange={(e) => setYear(e.target.value)}></input>
                <input value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)}></input>
            </div>
            <div>
                <div className='carTypes'>
                    <img className={type === 1? 'activeType': null} onClick={() => carTypeClickHandler(1)}></img>
                    <img className={type === 2? 'activeType': null} onClick={() => carTypeClickHandler(2)}></img>
                    <img className={type === 3? 'activeType': null} onClick={() => carTypeClickHandler(3)}></img>
                    <img className={type === 4? 'activeType': null} onClick={() => carTypeClickHandler(4)}></img>
                    <img className={type === 5? 'activeType': null} onClick={() => carTypeClickHandler(5)}></img>
                    <img className={type === 6? 'activeType': null} onClick={() => carTypeClickHandler(6)}></img>

                </div>

                <div className='carFeatures'>
                    <img className={features.has('Leather Seats')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Leather Seats')}></img>
                    <img className={features.has('Wifi')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Wifi')}></img>
                    <img className={features.has('Movie Screens in the back')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Movie Screens in the back')}></img>
                    <img className={features.has('Adaptive Cruise Control')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Adaptive Cruise Control')}></img>
                    <img className={features.has('360 Degree Camera')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('360 Degree Camera')}></img>
                    <img className={features.has('Parking Assist')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Parking Assist')}></img>
                    <img className={features.has('Automotive Night Vision')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Automotive Night Vision')}></img>
                    <img className={features.has('Heads Up Display')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Heads Up Display')}></img>
                    <img className={features.has('Drowsiness Detection')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Drowsiness Detection')}></img>
                    <img className={features.has('Autonomous Driving')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Autonomous Driving')}></img>
                    <img className={features.has('Anti-Collision Warning System')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Anti-Collision Warning System')}></img>
                    <img className={features.has('Back Up Camera')? 'activeFeature': null} onClick={() => carFeaturesClickHandler('Back Up Camera')}></img>
                </div>
            </div>
        </form>
    )
}
