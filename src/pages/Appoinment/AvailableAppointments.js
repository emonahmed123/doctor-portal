import { format } from 'date-fns';
import React, {  useState ,useEffect} from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loding from '../Shared/Loding'
import { useQuery } from 'react-query';

const AvailableAppointments = ({date}) => {
  // const [services , setServices] =useState( [ ]);
  const [ treatment, setTreatment] =useState(null)
const formateDate =format(date,'PP')
  const{data:services, isLoading,refetch} =useQuery(['available',formateDate], ()=>fetch(`https://evening-inlet-94769.herokuapp.com/available?date=${formateDate}`)
  .then(res=>res.json( ))
   )

 
  if(isLoading){
    return <Loding></Loding>
  }
  
  // useEffect(()=>{
  //        fetch(`https://evening-inlet-94769.herokuapp.com/available?date=${formateDate}`)
  //        .then(res=>res.json())
  //        .then(data =>setServices(data))

  //  },[formateDate])
   return (
        <div >
                 <h4 className=' text-xl text-primary text-center font-bold my-12'> Available Appoinments on {format(date, 'PP') }</h4>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 '> 
          {
             services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}> </Service>)
            
            } 
              </div>
              {treatment && <BookingModal   date={date}  treatment={treatment}
                setTreatment={setTreatment} refetch={refetch}></BookingModal> }
        </div>
    );
};

export default AvailableAppointments;