import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loding from  '../Shared/Loding';
import {toast } from 'react-toastify';
const Adddoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
  
  const {data:services,isLoading} =useQuery('service',()=> fetch('https://evening-inlet-94769.herokuapp.com/service').then(res=> res.json()))
  const imgStorageKey ='d566b2316b434e7b0ecc2c19271438bd'
  /**
   * 3 way to store images
   * thrid party storage
   * your own  in your  server(flie system)
   * database
   */
  
  const onSubmit = async data => {
        console.log('data',data);
       const image =data.img[0]
       
       const formData =new FormData()
          formData.append('image',image);
       const url =`https://api.imgbb.com/1/upload?&key=${imgStorageKey} `
         fetch(url,{
             method:'POST',
             body:formData
         })
         .then(res=>res.json())
         .then(result =>{
             console.log('imgbb',result)
                if(result.success){
                    const img =result.data.url
                      const doctor ={
                          name :data.name,
                          email:data.email,
                          specialty:data.specialty,
                          img:img
                      }
                      ///send to your database
                      fetch('https://evening-inlet-94769.herokuapp.com/doctor', {
                        method:'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }, 
                        body:JSON.stringify(doctor)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        console.log(inserted)
                        if(inserted.insertedId){
                            toast.success('Doctor added successfully')
                            reset();
                        }
                        else{
                            toast.error('Failed to add the doctor');
                        }
                    })
                   
                    }         
            })
    }
  if (isLoading){
         return <Loding></Loding>
  };
  
    return(
        <div>
        <h2 className='text-2xl'>Add a New Doctor </h2> 
        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: " Name is Required"
                                    },

                                })}
                                type="name" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: " Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email '
                                    }
                                })}
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-bold">Specialty</span>
                            </label>
                            <select {...register("specialty")} className="select select-bordered input-bordered  w-full max-w-xs">
                                       {
                                            services.map(service=> <option key={service._id}value={service.name}  >{service.name}</option>   ) 

                                       }
                                                                                   
                      
                               </select>



                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Photo</span>
                            </label>
                            <input
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: " img is Required"
                                    },

                                })}
                                type="file"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>


                        <input className='btn w-full max-w-xs' type="submit" value='ADD' />
                    </form>
        
        
        
        </div>
    );
};

export default Adddoctor;