export const NotLoggedInModal = ({allData}) => {
    const {notLoggedInModal} = allData;
    return (
        <div className={notLoggedInModal?'move notLoggedInModal':'notLoggedInModal'}>
            <h2>You must be logged in to leave a review</h2>
        </div>
    )
}
