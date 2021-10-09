export const TopButton = ({dropDown,setDropDown}) => {
    return (
        <div className="navButton" onMouseEnter={() => {setDropDown(true)}} onMouseLeave={() => {setDropDown(false); console.log('off')}}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}
