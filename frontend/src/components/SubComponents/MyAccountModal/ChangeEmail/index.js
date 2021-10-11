import { useState } from 'react'
import './index.css'
export const ChangeEmail = ({data}) => {
    const [email, setEmail] = useState();
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentEmail'>Current Email</label>
                <input name='currentEmail' className='inputTextBox' type='text' value={'benthere914@gmail.com'}></input>
            </div>
            <div>

            <label htmlFor='newEmail'>New Email</label>
            <input name='newEmail' className='inputTextBox' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='buttons'>
                <button>Submit</button>
                <button onClick={() => data.funcs.back('email')}>Back</button>
            </div>
        </div>

        </>
    )
}
