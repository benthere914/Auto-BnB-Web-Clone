import './index.css';
import { useHistory } from 'react-router';
export const Splash = () => {
    const history = useHistory();
    return (
        <div className='splash'>
            <img src='https://www.cnet.com/a/img/resize/3a1608d0b2cd77d2b5cb246f1fdbdedb5ab079d2/hub/2016/06/05/e2a0ef9a-25b2-4acd-8154-9ada2305e0ca/23c594f8e6ce69b955e6aa83f76a9447.jpg?auto=webp&width=1092' alt='splashImg'></img>
            <div className='centerContent'>
                <p>Not sure which car to drive? Perfect.</p>
                <button onClick={()=> history.push(`/types/${+((Math.random() * 5).toFixed()) + 1}`)}>I'm Flexible</button>
            </div>
        </div>
    )
}
