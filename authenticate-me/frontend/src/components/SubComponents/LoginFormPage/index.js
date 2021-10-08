import React, { useState } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthModal } from '../../../Context/AuthModals';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const {setLoginModal, setSignupModal} = useAuthModal();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).then(() => setLoginModal(false)).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);
	};

	return (
		<div id="parent">

			<form onSubmit={handleSubmit}>
                <i className='fas fa-window-close' onClick={() => setLoginModal(false)}></i>
				{errors.length > 0 && (
					<ul>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
				)}
                <div>
                </div>
				<label>
					Username or Email
					<input
						type="text"
						value={credential}
						onChange={(e) => setCredential(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Log In</button>
                <p>Don't Have An Account? Sign Up <span className="switchModals" onClick={()=> {setLoginModal(false);setSignupModal(true)}}>Here</span></p>
			</form>
		</div>
	);
};

export default LoginFormPage;
