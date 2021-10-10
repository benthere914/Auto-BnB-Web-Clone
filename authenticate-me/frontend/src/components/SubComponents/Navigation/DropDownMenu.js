import { useAuthModal } from "../../../Context/AuthModals";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../../store/session';

export const DropDownMenu = ({setNavDropDown}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    let loggedIn;
    console.log(user)
    if (user){
        loggedIn = !!(user.username)
    }
    const {setLoginModal, setSignupModal} = useAuthModal()


    return (
        <div className='dropMenu'>
            {loggedIn? (
                <>
                    <h3 className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(false);setNavDropDown(false);dispatch(sessionActions.logout())}}>Log Out</h3>
                    <h3>My Account</h3>
                    <h3>My Profile</h3>
                    {/* <h3 className="breakLine"></h3> */}
                    <h3 className='hostLink' onClick={() => {setNavDropDown(false);setLoginModal(!loggedIn)}}>Host Your Car</h3>
                </>
            ): (
                <>
                <h3 className="AuthLink" onClick={() => {setSignupModal(false);setLoginModal(true);setNavDropDown(false)}}>Log In</h3>
                <h3 className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(true);setNavDropDown(false)}}>Sign Up</h3>
                </>
            )}
        </div>
    )
}
