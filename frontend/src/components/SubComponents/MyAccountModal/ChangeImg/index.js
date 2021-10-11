import './index.css'
export const ChangeImg = ({data}) => {
    return (
        <>
        <div className='mainChangeDiv'>
            <h2 className='title'>Change Your Profile Photo</h2>
            <div>
                <h2>We use a service called Gravatar to hold the data of our photos. If you would like to change or customize your profile picture, please click the button below to visit their site.</h2>
            </div>
            <div>
            </div>
            <div className='buttons'>
                <button onClick={() => {data.funcs.back('img');window.open('https://en.gravatar.com/');}}>Gravatar</button>
                <button onClick={() => data.funcs.back('img')}>Back</button>
            </div>
        </div>
        </>
    )
}
