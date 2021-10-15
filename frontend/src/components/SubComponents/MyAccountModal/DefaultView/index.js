import './index.css'
import md5 from 'md5'
export const DefaultView = ({data, userId}) => {
    console.log(userId)
    const changeView = (func) => {
        data.funcs['default'](false);
        data.funcs[func](true);
    }
    return (
        <>
        <div className='mainDefaultView'>
            <h2 className='title'>My Account</h2>
            <div className='topDiv'>
                <div className='photoDiv'>
                    <img className='profilePhoto' src={`https://www.gravatar.com/avatar/${md5(userId.email)}`} alt='Profile'></img>
                </div>
                <div className='myAccountData'>
                    <h2 className='dataTitle'>User Name</h2>
                    <h2 className='dataSquared'>{userId.username}</h2>
                    <h2 className='dataTitle'>Email</h2>
                    <h2 className='dataSquared'>{userId.email}</h2>
                </div>
            </div>
                <div className='changeLinks' style={{display: 'none'}}>
                    {/* <h3 className='changeLink'>Change Your </h3> */}
                    <h3 className='changeLink' onClick={() => changeView('pass') }>Change Password</h3>
                    <h3 className='changeLink' onClick={() => changeView('email') }>Change Email</h3>
                    <h3 className='changeLink' onClick={() => changeView('user') }>Change Username</h3>
                    <h3 className='changeLink' onClick={() => changeView('img') }>Change Profile Picture</h3>
                </div>
        </div>

        </>
    )
}
