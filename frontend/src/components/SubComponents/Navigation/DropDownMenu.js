import { useAuthModal } from "../../../Context/AuthModals";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../../store/session';
import { useMyAccountModal } from "../../../Context/MyAccountModal";
export const DropDownMenu = ({setNavDropDown}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    let loggedIn;
    if (user){
        loggedIn = !!(user.username)
    }
    const {setLoginModal, setSignupModal} = useAuthModal()
    const {setMyAccountModal} = useMyAccountModal();


    return (
        <div className='dropMenu'>
            {loggedIn? (
                <>
                    <h3 className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(false);setNavDropDown(false);dispatch(sessionActions.logout())}}>Log Out</h3>
                    <h3 onClick={() => setMyAccountModal(true)}>My Account</h3>
                    <h3>My Profile</h3>
                    {/* <h3 className="breakLine"></h3> */}
                    <h3 className='hostLink' onClick={() => {setNavDropDown(false);setLoginModal(!loggedIn)}}>Host Your Car</h3>
                </>
            ): (
                <>
                <h3 className="AuthLink" onClick={() => {setSignupModal(false);setLoginModal(true);setNavDropDown(false)}}>Log In</h3>
                <h3 className="AuthLink" onClick={() => {setLoginModal(false);setSignupModal(true);setNavDropDown(false)}}>Sign Up</h3>
                <h3 className='AuthLink' onClick={() => {dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))}}>Log In As Demo</h3>
                </>
            )}
        </div>
    )
}
