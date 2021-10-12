import './cards.css'

export const Cards = ({data}) => {
    console.log(data)
    return (
        <div className='spots'>
            {data.map(e => (
                <div key={e.spotId} className='spot'>
                    <img className='spotMainImg' src={e[1].mainImage.url} alt={e[1].mainImage.alt}></img>
                    <div>
                        <p>{e[1].author}</p>
                        <p>{e[1].title}</p>
                        <div>
                            <p>{`${e[1].mileage} miles`}</p>
                            <p>{e[1].year}</p>
                        </div>
                        <div>
                            {e[1].mainFeatures.map(e => (<p>{e}</p>))}
                        </div>
                    </div>
                </div>
            ))}

            {data.map((e) => console.log(e[1].author))}

        </div>
    )
}
