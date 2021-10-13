import uuid from 'react-uuid';
export const Images = ({data}) => {
    const {urls} = data
    return (
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
    )
}
