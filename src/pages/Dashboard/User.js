import React from 'react';
import {useQuery} from 'react-query'
import Loding from '../Shared/Loding'
import UserRow from './UserRow';
const User = () => {
    const {data:user,isLoading,refetch } =useQuery('user',()=>fetch('https://evening-inlet-94769.herokuapp.com/user',{
       method:"GET",   
      headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res=>res.json()))
     if(isLoading){
     return <Loding></Loding>
     }
    return (
        <div>
            <h2 className='text-2xl' >All users:{user.length}</h2>
       
       
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
         user.map(user=><UserRow user={user} key={user._id} refetch={refetch}></UserRow>)

       }

    
    </tbody>
  </table>
</div>
       
       
       
       
        </div>
    );
};

export default User;