import React from 'react';
import{ useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loding';
import DeleteConfirmModal from './DeleteConfirmModal';
// import DeleteConfirmModal from './DeleteConfirmModal';
   import RowDoctor from './RowDoctor';


   const MangeDoctor = () => {
    const [deletingDoctor,setDeletingDoctor]= useState(null)
const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://evening-inlet-94769.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
         <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
          doctors.map((doctor,index)=><RowDoctor
          key={doctor._key}
          doctor={doctor}
          index={index}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
          ></RowDoctor>)
      }
                    </tbody>
                </table>
            </div>
       
{
    deletingDoctor&& <DeleteConfirmModal
   deletingDoctor={deletingDoctor}
   refetch={refetch}
   setDeletingDoctor={setDeletingDoctor}
    ></DeleteConfirmModal>
}
        </div>
    );
};

export default MangeDoctor;