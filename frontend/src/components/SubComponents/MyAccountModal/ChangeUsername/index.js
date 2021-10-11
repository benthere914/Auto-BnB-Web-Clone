import { useState } from 'react'
export const ChangeUser = ({data}) => {
    const [username, setUsername] = useState();
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Username</h2>
            <div>
                <label htmlFor='currentUsername'>Current Username</label>
                <input name='currentUsername' className='inputTextBox' type='text' value={'benthere914'}></input>
            </div>
            <div>

            <label htmlFor='newUsername'>New Username</label>
            <input name='newUsername' className='inputTextBox' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='buttons'>
                <button>Submit</button>
                <button onClick={() => data.funcs.back('user')}>Back</button>
            </div>
        </div>
        </>
    )
}
