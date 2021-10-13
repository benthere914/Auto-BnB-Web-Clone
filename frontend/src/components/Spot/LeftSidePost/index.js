

export const LeftSidePost = ({allData}) =>{
    const {data, imgIndex} = allData;
    console.log(imgIndex)
    return (
        <div className='leftSide'>
			<h1 className='spotTitle'>{data?.title} by {data?.author.username}</h1>
			<img className='spotImage' src={data?.images[imgIndex].url} alt={data?.images[imgIndex].alt}></img>
		</div>
    )
}
