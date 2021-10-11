import './index.css'
import { useMyAccountModal } from "../../../Context/MyAccountModal";
import { useEffect, useState } from "react";
import { ChangeEmail } from "./ChangeEmail";
import { ChangeUser } from "./ChangeUsername";
import { ChangePass } from "./ChangePass";
import { ChangeImg } from "./ChangeImg";
import { DefaultView } from "./DefaultView";
export const MyAccountModal = () => {
    const {setMyAccountModal} = useMyAccountModal();
    const [defaultView, setDefaultView] = useState(true);
    const [changeUsername, setChangeUsername] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [changePass, setChangePass] = useState(false);
    const [changeImg, setChangeImg] = useState(false);
    const [width, setWidth] = useState(700);
    const [height, setHeight] = useState(500);
    const [right, setRight] = useState(505);
    const [top, setTop] = useState(200)
    const backView = (func) => {
        data.funcs['default'](true);
        data.funcs[func](false);
    }
    const exitFunc = () => {
        setDefaultView(true);
        setChangeUsername(false);
        setChangeEmail(false);
        setChangePass(false);
        setChangeImg(false);
        setMyAccountModal(false);
    }

    useEffect(()=> {
        if (defaultView){setWidth(700); setHeight(400); setRight(505); setTop(200); return}
        setWidth(500);
        setHeight(350);
        setRight(707);
        setTop(200);
    }, [defaultView]);
    const data = {funcs: {'back': backView, 'default': setDefaultView, 'email': setChangeEmail, 'user': setChangeUsername, 'pass': setChangePass, 'img': setChangeImg}}
    return (
        <div className='myAccountModal' style={{width, height}}>
            {defaultView? (<DefaultView data={data}/>): null}
            {changeEmail? (<ChangeEmail data={data}/>): null}
            {changeUsername? (<ChangeUser data={data}/>): null}
            {changePass? (<ChangePass data={data}/>): null}
            {changeImg? (<ChangeImg data={data}/>): null}
            <i className='fas fa-times' onClick={() => exitFunc()} style={{right, top}}></i>
        </div>
    )
}
