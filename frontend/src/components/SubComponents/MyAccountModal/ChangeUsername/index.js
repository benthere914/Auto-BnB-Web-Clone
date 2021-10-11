import { useState } from 'react'
import * as sessionActions from '../../../../store/session'
export const ChangeUser = ({data}) => {
    const [username, setUsername] = useState();
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentUsername'>Current Username</label>
                {/* <input name='currentUsername' className='inputTextBox' type='text' value={'benthere914'} onChange={() => 1}></input> */}
            </div>
            <div>

            <label htmlFor='newUsername'>New Username</label>
            <input name='newUsername' className='inputTextBox' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div className='buttons'>
                <button onClick={() => {
                    console.log('start')
                    sessionActions.changeUsername({id: 16, username})
                    console.log('end')
                    }}>Submit</button>
                <button onClick={() => data.funcs.back('user')}>Back</button>
            </div>
        </div>
        </>
    )
}
