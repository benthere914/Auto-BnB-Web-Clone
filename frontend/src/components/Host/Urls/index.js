

export const Urls = ({data}) => {
    const {urls, setUrls, urlsError} = data
    return (
        <div className='addImageDiv'>
        <label>{urlsError?urlsError:'Add one image url per line'}</label>
        <textarea rows={15} cols={100} value={urls} onChange={(e) => setUrls(e.target.value)}></textarea>
        </div>
    )
}
