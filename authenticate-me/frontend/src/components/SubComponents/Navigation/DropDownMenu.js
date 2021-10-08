import { useAuthModal } from "../../../Context/AuthModals";
export const DropDownMenu = ({setDropDown}) => {
    const {setLoginModal, setSignupModal} = useAuthModal()
    return (
        <ul className='dropMenu' onMouseEnter={() => {console.log('test');setDropDown(true)}} onMouseLeave={() => setDropDown(false)}>
            <li className="AuthLink" onClick={() => {setSignupModal(false);setLoginModal(true);setDropDown(false)}}>Log In</li>
            <li className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(true);setDropDown(false)}}>Sign Up</li>
            <li className="breakLine"></li>
            <li className='hostLink'>Host Your Car</li>
        </ul>
    )
}
