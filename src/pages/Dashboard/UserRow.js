import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role} = user;
  const makeAdmin = ()=>{
       fetch(`https://evening-inlet-94769.herokuapp.com/user/admin/${email}`,{
           method:'PUT',
           headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           }
           
           })
           .then(res=>{
             if(res.status === 403){
                 toast.error('Faillded to Make an admin')
             } 
               return res.json()
                    })
            .then(data =>{
                //  )   console.groupCollapsed(data.modifiedCount
                if(data.modifiedCount>0){
                    toast.success('Make amin Sucees')
                    refetch()
               
             }
            })
  }
    return (
       
       
        <tr>
        
        <th>1</th>
        <td>{email}</td>
        <td>{ role !=='admin'&& <button onClick={makeAdmin} className='btn btn-xs'>Make admin</button> }</td>
        <td><button className='btn btn-xs'>Remove User</button> </td>
        
      </tr>
     
    );
};

export default UserRow;