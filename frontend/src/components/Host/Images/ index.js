import uuid from 'react-uuid';
export const Images = ({data}) => {
    const {urls, openPictureModalHandler, title} = data
    return (
        <div className='imagesDiv'>
        {!!urls.length && urls.split(',').map((e) => (
                 <img
                 alt={title}
                 onClick={() => {openPictureModalHandler()}}
                 key={uuid()}
                 className='images'
                 src={e}
                ></img>))}

        </div>
    )
}
