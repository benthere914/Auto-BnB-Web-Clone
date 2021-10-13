import { useState } from "react"
import uuid from 'react-uuid';

export const Images = ({urls, setUrls, urlsError, setUrlsError}) => {
    console.log(urls)
    return (

            <>
            <div className='addImageDiv'>
                <label>{urlsError?urlsError:'Add one image url per line'}</label>
                <textarea rows={15} cols={100} value={urls} onChange={(e) => setUrls(e.target.value)}></textarea>
            </div>
            <div className='imagesDiv'>
                 {urls.split('\n').map((e) => (
                 <img
                 key={uuid()}
                 className='images'
                 src={e}
                 onError={
                     (e) => {
                         e.target.src='https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg';
                         }}></img>))}

            </div>
            </>

    )
}
