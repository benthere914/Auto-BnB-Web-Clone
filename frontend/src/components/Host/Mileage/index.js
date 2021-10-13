
export const Mileage = ({data}) => {
    const {mileage, setMileageError, setMilege, mileageError} = data;
    return (
        <div>
            <label>mileage</label>
            <input
            style={mileageError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            value={mileage}
            onChange={(e) => {setMilege(e.target.value);setMileageError('') }} placeholder={mileageError?mileageError: 'Miles'}></input>
        </div>
    )
}
