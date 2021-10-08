export const TopButton = ({dropDown,setDropDown}) => {
    return (
        <div className="navButton" onMouseEnter={() => {console.log('test');setDropDown(true)}} onMouseLeave={() => setDropDown(false)}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}
