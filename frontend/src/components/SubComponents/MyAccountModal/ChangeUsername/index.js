import { useState } from 'react'
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../../store/session'
export const ChangeUser = ({data}) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    // useEffect(() => {sessionActions.changeUsername({id: 16, username: 'benthere914'})}, [])
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentUsername'>Current Username</label>
                <input name='currentUsername' className='inputTextBox' type='text' value={'benthere914'} onChange={() => 1}></input>
            </div>
            <div>

            <label htmlFor='newUsername'>New Username</label>
            <input name='newUsername' className='inputTextBox' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div className='buttons'>
                <button onClick={() => {dispatch(sessionActions.changeUsername({id: 16, username: 'benthere914'}))}}>Submit</button>
                <button onClick={() => data.funcs.back('user')}>Back</button>
            </div>
        </div>
        </>
    )
}
