export const Price = ({data}) => {
    const {pricePerDay, setPriceError, setPricePerDay, priceError} = data;
    if (priceError){setPricePerDay('')}
    return (
        <div>
            <label>Price</label>
            <input
            style={priceError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            value={pricePerDay}
            onChange={(e) => {setPricePerDay(e.target.value); setPriceError('')}}
            placeholder={priceError?priceError: 'price'}></input>
        </div>
    )
}
