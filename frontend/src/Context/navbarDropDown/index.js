import { createContext, useContext, useState } from "react";

export const NavDropDownContext = createContext();
export const useNavDropDown = () =>  useContext(NavDropDownContext);
export const NavDropDownProvider = ({children}) => {
    const [NavDropDown, setNavDropDown] = useState(false);
    return (
        <NavDropDownContext.Provider value={{NavDropDown, setNavDropDown}}>
            {children}
        </NavDropDownContext.Provider>
    )
}
