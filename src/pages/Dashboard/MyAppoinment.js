import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const MyAppoinment = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] =useState([ ]);
     useEffect(()=>{
             if(user){
                fetch(`http://localhost:5000/booking?patient=${user.email}`,{
                  method: 'GET',
                  headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
                })
                .then(res =>res.json())
                .then(data=>setAppointment(data))
           
              }
              console.log(appointment)
     },[user])
    return (
        <div>
        <h1> my :{appointment.length}</h1>
         
        <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>

   {
       appointment.map((a, index) =>      <tr>
                     <th>{index+1}</th>
        <th>{a.patientName}</th>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
        
      </tr>)
   }

    
    </tbody>
  </table>
</div>
   
   
   
        </div>
    );
};

export default MyAppoinment;