import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useAuthModal } from './Context/AuthModals';
import LoginFormPage from './components/SubComponents/LoginFormPage';
import SignupFormPage from './components/SubComponents/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/SubComponents/Navigation';

function App() {
    const {loginModal, signupModal} = useAuthModal()

	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);
    const auth = useSelector(state => state.session);
    console.log(loginModal, signupModal)
	return (
		<>
            {loginModal && <LoginFormPage></LoginFormPage>}
            {signupModal && <SignupFormPage></SignupFormPage>}
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
                    <Route exact path='/'>

                    </Route>

				</Switch>
			)}
		</>
	);
}

export default App;
