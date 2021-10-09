import { Link } from 'react-router-dom'
export const TypeCards = () => {
    return (
        <ul className='cards'>
                <li className='card'>
                    <Link to='/types/1'>
                        <h2>Sports Cars</h2>
                        <img src='https://cdn.motor1.com/images/mgl/01yvV/s1/4x3/lamborghini-sc20.webp'></img>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/2'>
                        <h2>Family Cars</h2>
                        <img src='https://images.cars.com/cldstatic/wp-content/uploads/20-Volkswagen-Atlas-OEM.jpg'></img>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/3'>
                        <h2>Trucks</h2>
                        <img src='https://www.netdirectautosales.com/images/eyJidWNrZXQiOiJuZGRzLXByb2QtaW1hZ2VzIiwia2V5IjoiaW52ZW50b3J5LzE4MDYxMDMyLTE2Mjg2MjQzMjM4MjYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6MzIzLCJmaXQiOiJjb250YWluIiwicG9zaXRpb24iOiJsZWZ0IHRvcCIsImJhY2tncm91bmQiOnsiciI6NTEsImciOjUxLCJiIjo1MSwiYWxwaGEiOjF9fX19'></img>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/4'>
                        <h2>Off Roading</h2>
                        <img src='https://www.claytonoffroad.com/sites/default/files/DB-201201-colorado-07684-HDR%20mobile_1.jpg'></img>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/5'>
                        <h2>Electric</h2>
                        <img src='https://media.architecturaldigest.com/photos/5fb4008a3ec62d20cc008aa5/16:9/w_2560%2Cc_limit/lucid-air-exterior-09.jpg'></img>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/6'>
                        <h2>Sedan</h2>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-honda-accord-hybrid-109-edit-1604961241.jpg?crop=0.553xw:0.413xh;0.116xw,0.531xh&resize=480:*'></img>
                    </Link>
                </li>
            </ul>
    )
}
