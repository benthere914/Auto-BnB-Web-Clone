export const TopButton = ({setNavDropDown}) => {
    return (
        <div className="navButton" onClick={() => setNavDropDown(true)}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}
