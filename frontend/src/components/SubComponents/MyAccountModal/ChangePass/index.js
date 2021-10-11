import { useState } from 'react'
export const ChangePass = ({data}) => {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentPass'>Current Password</label>
                <input name='currentPass' className='inputTextBox' type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='newPass'>New Password</label>
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
