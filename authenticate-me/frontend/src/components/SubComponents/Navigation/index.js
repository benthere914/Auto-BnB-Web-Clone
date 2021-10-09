import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthModal } from '../../../Context/AuthModals';
import { TopButton } from './TopButton';
import { DropDownMenu } from './DropDownMenu';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState, useEffect } from 'react';
function Navigation() {
    const [dropDown, setDropDown] = useState(false);
	return (
		<ul className='navbar'>
			<li>
				<NavLink className="home" exact to="/">
					CarBnB
				</NavLink>
			</li>
            <li>
                <TopButton setDropDown={setDropDown}/>
                {dropDown && <DropDownMenu setDropDown={setDropDown}/>}
				{/* {isLoaded && sessionLinks} */}
            </li>
		</ul>
	);
}

export default Navigation;
