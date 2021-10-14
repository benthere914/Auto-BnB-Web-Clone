export const EditLinks = ({data}) => {
    const {editReviewClickHandler, deleteReviewHandler, e} = data;
    return (
        <div className='editReviewLinks'>
            <p className='editReviewLink' onClick={() => editReviewClickHandler(e)}>edit</p>
            <p className='editReviewLink' onClick={() => {deleteReviewHandler(e)}}>delete</p>
        </div>
    )
}
