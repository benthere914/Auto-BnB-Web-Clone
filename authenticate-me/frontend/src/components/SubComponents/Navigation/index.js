import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthModal } from '../../../Context/AuthModals';
import ProfileButton from './ProfileButton';
import './Navigation.css';
function Navigation({ isLoaded }) {
    const {setLoginModal, setSignupModal} = useAuthModal()
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
                <ul>
                    <li onClick={() => {setSignupModal(false);setLoginModal(true)}}>Log In</li>
                    <li onClick={() => {setLoginModal(false);setSignupModal(true)}}>Sign Up</li>
                </ul>
			</>
		);
	}

	return (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
				{isLoaded && sessionLinks}
			</li>
		</ul>
	);
}

export default Navigation;
