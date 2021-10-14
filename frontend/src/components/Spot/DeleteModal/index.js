export const DeleteModal = ({funcs}) => {
    const {closeDeleteModalHandler, deleteClickHandler} = funcs
    return (
        <div className='deleteModal'>
            <h3 className='deleteModalTitle'>Are you sure you want to delete this post</h3>
            <button onClick={() => {deleteClickHandler()}} className='yesDelete'>Yes</button>
            <button onClick={() => {closeDeleteModalHandler()}} className='noDelete'>No</button>
        </div>
    )
}
