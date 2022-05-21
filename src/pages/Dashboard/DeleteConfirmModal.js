import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor,refetch,setDeletingDoctor }) => {
  const {name,email} = deletingDoctor
  const handleDelete = () =>{
    fetch(`https://evening-inlet-94769.herokuapp.com/doctor/${email}`, {
        method: 'DELETE',
        headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount){
            toast.success(`Doctor: ${name} is deleted.`)
            setDeletingDoctor(null)
            refetch();
        }
    })
}
  
  
  
  return (
        <div>
          


<input type="checkbox" id="deletemodal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red">Are you sure deletin Doctor</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
      <label for="deletemodal" class="btn">Cancel</label>
    </div>
  </div>
</div>



        </div>
    );
};

export default DeleteConfirmModal;