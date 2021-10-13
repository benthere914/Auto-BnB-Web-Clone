import './cards.css'
import { useHistory } from 'react-router'

export const Cards = ({data}) => {
    let history = useHistory();
    return (
        <div className='spots'>
            {data?.map(e => (e[1].spotId &&
                <div key={e[1].spotId} className='spot' onClick={() => history.push(`/spots/${e[1].spotId}`)}>
                    <img className='spotMainImg' src={e[1].mainImage.url} alt={e[1].mainImage.alt}></img>
                    <div>
                        <p>{e[1].author}</p>
                        <p>{e[1].title}</p>
                        <div className='mainDetails'>
                            <p>{`${e[1].mileage} miles, ${e[1].year}`}</p>
                        <p className='features'>{`${e[1].features[0]}, ${e[1].features[1]}, ${e[1].features[2]}`}</p>
                        </div>
                    </div>
                    <div className='pricePerDayOnFeed'>
                        <p>{`$${e[1].pricePerDay}/Day`}</p>
                    </div>
                </div>
            ))}


        </div>
    )
}
