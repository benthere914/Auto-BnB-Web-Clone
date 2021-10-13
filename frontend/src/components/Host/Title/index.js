

export const Title = ({data}) => {
    const {title,titleError, setTitle, setTitleError} = data;
    return (
        <>
        <label className='titleFormLabel'>Title</label>
            <input
            style={titleError?{backgroundColor: 'pink'}: {backgroundColor: 'white'}}
            className='titleForm'
            value={title}
            onChange={(e) => {setTitle(e.target.value); setTitleError('')}}
            placeholder={titleError?titleError: 'Title'}></input>
        </>
    )
}
