import './index.css'
export const Footer = () => {
    const gitHubClickHandler = () => {
        window.open('https://github.com/benthere914')
    }
    const linkedInClickHandler = () => {
        window.open('https://www.linkedin.com/in/benjamin-rose-0a6880202/')
    }
    return (
        <div className='footerMainDiv'>
            <h3>Created by Ben Rose</h3>
            <img onClick={() => gitHubClickHandler()} src='https://seekicon.com/free-icon-download/github-circle_1.svg'/>
            <img onClick={() => linkedInClickHandler()} src='https://icons-for-free.com/iconfiles/png/512/linked+linkedin+social+icon-1320192249485999356.png'/>
        </div>
    )
}
