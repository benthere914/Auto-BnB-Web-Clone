import './index.css'
export const DefaultView = ({data}) => {
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
                    <img className='profilePhoto' src='https://aux.iconspalace.com/uploads/15592331301467422446.png' alt='Profile Photo'></img>
                </div>
                <div className='myAccountData'>
                    <h2 className='dataTitle'>User Name</h2>
                    <h2 className='dataSquared'>Benthere914</h2>
                    <h2 className='dataTitle'>Email</h2>
                    <h2 className='dataSquared'>benthere914@gadsfadfadfasdfasdfmail.com</h2>
                </div>
            </div>
                <div className='changeLinks'>
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
