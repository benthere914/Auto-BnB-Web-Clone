import React from 'react';
import { NavLink } from 'react-router-dom';
import { TopButton } from './TopButton';
import { DropDownMenu } from './DropDownMenu';
import './Navigation.css';
import { useNavDropDown } from '../../../Context/navbarDropDown';
import * as spotActions from '../../../store/spot'
import { useDispatch } from 'react-redux';
function Navigation() {
    const dispatch = useDispatch();
    const {NavDropDown, setNavDropDown} = useNavDropDown();
	return (
			<ul className="navbar">
				<li>
					<NavLink className="home" exact to="/" onClick={() => {dispatch(spotActions.resetSpot())}}>
						AutoBnB
					</NavLink>
				</li>
				<li>
					<TopButton setNavDropDown={setNavDropDown} />
                    {NavDropDown && (<DropDownMenu setNavDropDown={setNavDropDown} />)}
				</li>
			</ul>

	);
}

export default Navigation;
