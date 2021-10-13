import uuid from 'react-uuid';
import { useState } from 'react';
export const Images = ({data}) => {
    const {urls, setPictureModal, openPictureModalHandler} = data
    const [display, setDisplay] = useState('')
    return (
        <div className='imagesDiv'>
        {!!urls.length && urls.split(',').map((e) => (
                 <img
                 onClick={() => {openPictureModalHandler()}}
                 key={uuid()}
                 className='images'
                 src={e}
                //  onLoad={() => setDisplay('visible')}
                //  onError={(e) => {setDisplay('none')}}
                //  style={{display: display}}
                ></img>))}

        </div>
    )
}
