import React from 'react';
import { toast } from 'react-toastify';

const RowDoctor = ({ doctor, index, refetch, setDeletingDoctor })=>  {
     console.log(doctor)
    const { name, specialty, img, email } =doctor;
    
   

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
            <label onClick={()=>setDeletingDoctor(doctor)} for="deletemodal" class="btn btn-xs btn-error">Delete</label>
             
                
                
                </td>
        </tr>
    );
};

export default RowDoctor;