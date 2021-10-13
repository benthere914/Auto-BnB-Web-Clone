export const Features = ({data}) => {
    const {featuresError, featureData, features, carFeaturesClickHandler} = data;
    return (
        <div>
            <h2 style={featuresError?{backgroundColor: 'pink', width: 335}: {backgroundColor: 'white'}}>{`${featuresError? featuresError: 'Choose your car features'}`}</h2>
            <div className='carFeatures'>
                {featureData.map(e =>(
                    <p
                    key={e.string}
                    className={features.has(e.string)? 'activeFeature': null }
                    onClick={() => carFeaturesClickHandler(e.string)}>{e.string}</p>
                    ))}
            </div>
        </div>
    )
}
