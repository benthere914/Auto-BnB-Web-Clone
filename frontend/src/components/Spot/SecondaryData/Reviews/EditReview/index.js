export const EditReview = ({data}) => {
    const {editReviewSubmitHandler, setEditReview, e, editReview} = data
    return (
        <form className='review' onSubmit={(event) => editReviewSubmitHandler(event, e)}>
            <input value={editReview} onChange={(e) => setEditReview(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}
