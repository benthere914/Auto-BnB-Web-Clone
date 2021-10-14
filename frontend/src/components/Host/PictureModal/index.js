import { useState } from "react";
export const PictureModal = ({data}) => {
    const {urls, title} = data;
    let arr = urls.split(',');
    const [index, setIndex] = useState(0);
    const leftArrowHandler = () => {
        if (index === 0){
            setIndex(arr.length - 1 );
            return
        }
        setIndex((prev) => prev - 1);
    };
    const rightArrowHandler = () => {
        if (index === arr.length - 1){
            setIndex(0);
            return
        }
        setIndex((prev) => prev + 1)
    };
    return (
        <div className='pictureModal'>
            <i className='fas fa-arrow-alt-circle-left arrow left' onClick={() => {leftArrowHandler()}}/>
            <img  alt={title} className='scrollImage' src={arr[index]}></img>
            <i className='fas fa-arrow-alt-circle-right arrow right' onClick={() => {rightArrowHandler()}}/>
        </div>
    )
}
