import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import './SignupForm.css';
import { useAuthModal } from '../../../Context/AuthModals';
function SignupFormPage() {
    const { setSignupModal, setLoginModal } = useAuthModal();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ email, username, password })
			).then(() => setSignupModal(false)).catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});
		}
		return setErrors([
			'Confirm Password field must be the same as the Password field',
		]);
	};

	return (
		<div id="parent">

			<form onSubmit={handleSubmit}>
                <i className='fas fa-window-close' onClick={()=> setSignupModal(false)}></i>
                {!!errors.length &&
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>}


				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
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
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
                <p>Already Have An Account? Log In <span className="switchModals" onClick={()=> {setSignupModal(false);setLoginModal(true)}}>Here</span></p>
			</form>
		</div>
	);
}

export default SignupFormPage;
