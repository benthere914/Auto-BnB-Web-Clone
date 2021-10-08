import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import { useAuthModal } from '../../../Context/AuthModals';
function ProfileButton({ user }) {
    const {setLoginModal, setSignupModal} = useAuthModal()
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};
		document.addEventListener('click', closeMenu);
		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
        setLoginModal(false);
        setSignupModal(false);


	};

	return (
		<>
			<button onClick={openMenu}>
				<i className="fas fa-user"></i>
			</button>
			{showMenu && (
				<ul className="profile-dropdown">
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>
						<button onClick={logout}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
