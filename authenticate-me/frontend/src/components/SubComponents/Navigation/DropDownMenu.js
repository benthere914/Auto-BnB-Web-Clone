import { useAuthModal } from "../../../Context/AuthModals";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../../store/session';

export const DropDownMenu = ({setDropDown}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    let loggedIn;
    console.log(user)
    if (user){
        loggedIn = !!(user.username)
    }
    const {setLoginModal, setSignupModal} = useAuthModal()


    return (
        <ul className='dropMenu' onMouseEnter={() => {setDropDown(true)}} onMouseLeave={() => setDropDown(false)}>
            {loggedIn? (
                <>
                    <li className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(false);setDropDown(false);dispatch(sessionActions.logout())}}>Log Out</li>
                </>
            ): (
                <>
                <li className="AuthLink" onClick={() => {setSignupModal(false);setLoginModal(true);setDropDown(false)}}>Log In</li>
                <li className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(true);setDropDown(false)}}>Sign Up</li>
                </>
            )}
            <li className="breakLine"></li>
            <li className='hostLink' onClick={() => {setDropDown(false);setLoginModal(true)}}>Host Your Car</li>
        </ul>
    )
}
