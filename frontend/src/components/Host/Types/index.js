

export const Types = ({data}) => {
    const {typeError, types, type, carTypeClickHandler, setTypeError} = data;
    return (
        <div>
            <h2 style={typeError?{backgroundColor: 'pink', width: '270px'}: {backgroundColor: 'white'}}>{typeError?typeError:'Pick a Car type'}</h2>
            <div className='carTypes'>
                {types.map(e =>
                <p key={e.id} className={type === e.id? 'activeType': null} onClick={() => {carTypeClickHandler(e.id); setTypeError('')}}>{e.string}</p>
                )}
            </div>
        </div>
    )
}
