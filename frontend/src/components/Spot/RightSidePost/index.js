import { Reviews } from './Reviews';
import { NewAppointment } from './NewAppointment';
export const RightSidePost = ({userId}) => {
    return (
        <div className='rightSide'>
            <Reviews userId={userId}/>
            <NewAppointment/>
        </div>
    )
}
