import React from 'react';
import { NavLink } from 'react-router-dom';
import { TopButton } from './TopButton';
import { DropDownMenu } from './DropDownMenu';
import './Navigation.css';
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
                    {NavDropDown && (<DropDownMenu setNavDropDown={setNavDropDown} />)}
				</li>
			</ul>

	);
}

export default Navigation;
