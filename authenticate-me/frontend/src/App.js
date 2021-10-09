import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useAuthModal } from './Context/AuthModals';
import LoginFormPage from './components/SubComponents/LoginFormPage';
import SignupFormPage from './components/SubComponents/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/SubComponents/Navigation';
import { HomePage } from './components/Home';

function App() {
    const {loginModal, signupModal} = useAuthModal()

	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);
	return (
		<>
            {loginModal?(<LoginFormPage/>): null}
            {signupModal?(<SignupFormPage/>): null}
			<Navigation/>
			{isLoaded && (
				<Switch>
                    <Route exact path='/'>
                        <HomePage></HomePage>
                    </Route>

				</Switch>
			)}
		</>
	);
}

export default App;
