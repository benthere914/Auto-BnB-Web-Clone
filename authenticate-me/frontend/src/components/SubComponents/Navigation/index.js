import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthModal } from '../../../Context/AuthModals';
import { TopButton } from './TopButton';
import { DropDownMenu } from './DropDownMenu';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState, useEffect } from 'react';
import { useNavDropDown } from '../../../Context/navbarDropDown';
function Navigation() {
    const {NavDropDown, setNavDropDown} = useNavDropDown()
	// const [dropDown, setDropDown] = useState(false);
	return (
			<ul className="navbar">
				<li>
					<NavLink className="home" exact to="/">
						CarBnB
					</NavLink>
				</li>
				<li>
					<TopButton setNavDropDown={setNavDropDown} />
					{/* {isLoaded && sessionLinks} */}
                {NavDropDown && (
                    <div className="menuHolder">
                        <DropDownMenu setNavDropDown={setNavDropDown} />
                    </div>
                )}
				</li>
			</ul>

	);
}

export default Navigation;
