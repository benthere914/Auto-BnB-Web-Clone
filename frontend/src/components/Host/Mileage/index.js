
export const Mileage = ({data}) => {
    const {mileage, setMileageError, setMileage, mileageError} = data;
    if (mileageError){setMileage('')}
    return (
        <div>
            <label>mileage</label>
            <input
            style={mileageError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            value={mileage}
            onChange={(e) => {setMileage(e.target.value);setMileageError('') }} placeholder={mileageError?mileageError: 'Miles'}></input>
        </div>
    )
}
