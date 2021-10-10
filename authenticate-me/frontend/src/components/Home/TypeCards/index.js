import { Link } from 'react-router-dom'
export const TypeCards = () => {
    return (
        <>
        <ul className='cards'>
                <li className='card'>
                    <Link to='/types/1'>
                        <img src='https://img.autobytel.com/car-reviews/autobytel/10040-best-convertible-sports-cars/2014-Chevrolet-Corvette-C7-Stingray-Convertible.jpg' alt='Sports Cars'></img>
                        <h2>Sports Cars</h2>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/2'>
                        <img src='https://www.admiral.com/sites/default/files/styles/magazine_article_800/public/2020-02/SKODA%20Yeti.jpg?itok=TCafxrpA' alt='Family Cars'></img>
                        <h2>Family Cars</h2>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/3'>
                        <img src='http://d254andzyoxz3f.cloudfront.net/americanpickuptrucks_thumbnail_v1_011916_0.jpg'alt='Trucks'></img>
                        <h2>Trucks</h2>
                    </Link>
                </li>
            </ul>
            <ul className='cards'>
                <li className='card'>
                    <Link to='/types/4'>
                        <img src='https://www.hammerheadoffroad.com/wp-content/uploads/2019/04/LE-150.jpg' alt='Off Roading'></img>
                        <h2>Off Roading</h2>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/5'>
                        <img src='https://img2.carmax.com/img/vehicles/21241149/1_cleaned.jpg?width=800' alt='Electric Cars'></img>
                        <h2>Electric</h2>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/types/6'>
                        <img src='https://img2.carmax.com/img/vehicles/21241135/1_cleaned.jpg?width=800' alt='Sedan'></img>
                        <h2>Sedan</h2>
                    </Link>
                </li>
            </ul>
            </>
    )
}
