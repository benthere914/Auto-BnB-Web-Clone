

export const PrimaryData = ({allData}) =>{
    const {data, imgIndex, setImgIndex} = allData;

    console.log(imgIndex, data)
    const leftArrowHandler = () => {
        console.log(imgIndex)
        console.log(data.images.length)
        if (imgIndex === 0){
            setImgIndex(data.images.length - 1 );
            return
        }
        setImgIndex((prev) => prev - 1);
    };
    const rightArrowHandler = () => {
        console.log(imgIndex)
        if (imgIndex === data.images.length - 1){
            setImgIndex(0);
            return
        }
        setImgIndex((prev) => prev + 1)
    };
    return (
        <div className='leftSide'>
			<h1 className='spotTitle'>{data?.title} by {data?.author.username}</h1>
            <div className={'scrollImages'}>
            <i className='fas fa-arrow-alt-circle-left arrow left' onClick={() => {leftArrowHandler()}}/>
			<img className='spotImage' src={data?.images[imgIndex].url} alt={data?.images[imgIndex].alt}></img>
            <i className='fas fa-arrow-alt-circle-right arrow right' onClick={() => {rightArrowHandler()}}/>
            </div>
		</div>
    )
}
