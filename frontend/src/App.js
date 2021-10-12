import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpotsFeed } from './components/SpotsFeed';
import { Spot } from './components/Spot';
import { Route, Switch } from 'react-router-dom';
import { useAuthModal } from './Context/AuthModals';
import LoginFormPage from './components/SubComponents/LoginFormPage';
import SignupFormPage from './components/SubComponents/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/SubComponents/Navigation';
import { HomePage } from './components/Home';
import { useNavDropDown } from './Context/navbarDropDown';
import { useMyAccountModal } from './Context/MyAccountModal';
import { MyAccountModal } from './components/SubComponents/MyAccountModal';


function App() {
    const {myAccountModal} = useMyAccountModal();
    const {NavDropDown, setNavDropDown} = useNavDropDown();
    const {loginModal, setLoginModal, signupModal, setSignupModal, authModalOver} = useAuthModal()

	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
    const clickHandler = () => {
        if (NavDropDown){setNavDropDown(false)}
        if (!authModalOver){
            if (loginModal){setLoginModal(false)}
            if (signupModal){setSignupModal(false)}
        }
    }
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);
    const userId = useSelector(state => state.session.user);
	return (
		<>
            <div onClick={()=>clickHandler()}>

                {loginModal?(<LoginFormPage/>): null}
                {signupModal?(<SignupFormPage/>): null}
                {myAccountModal?(<MyAccountModal/>):null}
                <Navigation/>
                {isLoaded && (
                    <Switch>
                        <Route exact path='/'>
                            <HomePage></HomePage>
                        </Route>
                        <Route path='/types/:typeId'>
                            <SpotsFeed/>
                        </Route>
                        <Route path='/spots/:spotId'>
                            <Spot userId={userId}/>
                        </Route>
                    </Switch>
                )}
            </div>
		</>
	);
}

export default App;
