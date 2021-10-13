

export const Year = ({data}) => {
    const {year, setYear, yearError, setYearError} = data;
    return (
        <div>
            <label>Year</label>
            <input
            style={yearError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            value={year}
            onChange={(e) => {setYear(e.target.value); setYearError('')}} placeholder={yearError?yearError: 'Years'}></input>
        </div>
    )
}
