import './cards.css'

export const Cards = ({data}) => {
    console.log(data)
    return (
        <div className='spots'>
            {data.map(e => (
                <div className='spot'>
                    <img className='spotMainImg' src={e[1].Images[0].url}></img>
                    <div>
                        <p>{e[1].Author.username}</p>
                        <p>{e[1].title}</p>
                    </div>
                </div>
            ))}

            {data.map((e) => console.log(e[1].Author.username))}

        </div>
    )
}
