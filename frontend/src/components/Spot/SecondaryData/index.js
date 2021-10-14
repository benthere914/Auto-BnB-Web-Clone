import { Reviews } from './Reviews';
import { NewAppointment } from './NewAppointment';
import { VehicleDetails } from './VehicleDetails';
export const SecondaryData = ({allData}) => {
    const {data, userId} = allData;
    return (
        <div className='bottomSide'>
            <VehicleDetails allData={{data}}/>
            <Reviews userId={userId}/>
            <NewAppointment/>
        </div>
    )
}
