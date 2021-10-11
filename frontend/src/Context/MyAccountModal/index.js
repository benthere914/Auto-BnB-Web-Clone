import { createContext, useContext, useState } from "react";

export const MyAccountModalContext = createContext();
export const useMyAccountModal = () =>  useContext(MyAccountModalContext);
export const MyAccountModalProvider = ({children}) => {
    const [myAccountModal, setMyAccountModal] = useState(false);
    return (
        <MyAccountModalContext.Provider value={{myAccountModal, setMyAccountModal}}>
            {children}
        </MyAccountModalContext.Provider>
    )
}
