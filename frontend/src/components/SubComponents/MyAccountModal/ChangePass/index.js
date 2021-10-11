import { useState } from 'react'
export const ChangePass = ({data}) => {
    const [currPassword, setCurrPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentPass'>Current Password</label>
                <input name='currentPass' className='inputTextBox' type='text' value={currPassword} onChange={(e) => setCurrPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='currentPass'>New Password</label>
                <input name='currentPass' className='inputTextBox' type='text' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='newPass'>Confirm New Password</label>
                <input name='newPass' className='inputTextBox' type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <div className='buttons'>
                <button>Submit</button>
                <button onClick={() => data.funcs.back('pass')}>Back</button>
            </div>
        </div>
        </>
    )
}
