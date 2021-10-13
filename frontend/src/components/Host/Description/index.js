export const Description = ({data}) => {
    const {descriptionError, description, setDescription, setDescriptionError} = data;
    if (descriptionError){setDescription('')}
    return (
        <>
            <label className='descriptionFormLabel'>Description</label>
            <input
            style={descriptionError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            className='descriptionForm'
            value={description}
            onChange={(e) => {setDescription(e.target.value); setDescriptionError('')}}
            placeholder={descriptionError?descriptionError:'Description'}></input>

        </>
    )
}
