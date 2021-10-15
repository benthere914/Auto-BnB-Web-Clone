export const ErrorModal = ({allData}) => {
    const {errorModal, error} = allData;
    return (
        <div className={errorModal?'move errorModal':'errorModal'}>
            <h2>{error}</h2>
        </div>
    )
}
