import React, { useState } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch } from 'react-redux';
import { useAuthModal } from '../../../Context/AuthModals';
import './LoginForm.css';

const LoginFormPage = () => {
    const {setLoginModal, setSignupModal, setAuthModalOver} = useAuthModal();
	const dispatch = useDispatch();
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);


	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).then(() => setLoginModal(false)).then(() => setAuthModalOver(false)).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);
	};

	return (
		<div id="parent" onMouseEnter={()=> setAuthModalOver(true)} onMouseLeave={()=> setAuthModalOver(false)}>

			<form onSubmit={handleSubmit} className='loginForm'>
                <h2>Log In</h2>
				{errors.length > 0 && (
					<ul>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
				)}

				<label htmlFor='username'>Username or Email</label>
                <input
                    name='username'
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
				<label htmlFor='password'>Password</label>
                <input
                    name='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
				<button type="submit">Log In</button>
                <p>Don't Have An Account? Sign Up <span className="switchModals" onClick={()=> {setLoginModal(false);setSignupModal(true)}}>Here</span></p>
			</form>
		</div>
	);
};

export default LoginFormPage;
