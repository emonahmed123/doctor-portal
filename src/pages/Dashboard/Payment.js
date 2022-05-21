import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loding from '../Shared/Loding';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheakOutForm from './CheakOutForm';

const stripePromise = loadStripe('pk_test_51L19tWBgZuDeK2D0tjjsERvbJbIZ46yVmzFHaIlVzrwDe0Fh2I1HaHNp9WzAvTklZQEPIzzFGteLafAgHwxdq7HA00QrSKFdJk');

const Payment = () => {
  const{id} =useParams()
  const url =`https://evening-inlet-94769.herokuapp.com/booking/${id}`
  const {data:appointment,isLoading}=useQuery(['booking',id],()=>fetch(url).then(res =>res.json()),{
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
   
  });
  if(isLoading){
      return <Loding></Loding>
  }
  return (
        <div>
       
  <div class="card w-50 max-w-md bg-base-100 shadow-xl">
  <div class="card-body">
    <p>Hello {appointment.patientName}</p>
    <h2 class="card-title">Payfor{appointment.treatment}</h2>
    <p>We will see you on May{appointment.date} </p>
      <p>Please pay ${appointment.price}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md  max-w-sm shadow-2xl bg-base-100 my-12">
      <div class="card-body">
   
     
        <div class="form-control mt-6">
        <Elements stripe={stripePromise}>
      <CheakOutForm appointment={appointment} />
     </Elements>
        </div>
      </div>
    </div>
  </div>

    );
};

export default Payment;