import React from 'react';
import flouoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
  const services =[
{
    _id :1,
    name:'Fluoride Tretment',
    description:' ',
    img:flouoride
},
{
    _id :2,
    name:'Cavity Filling',
    description:' ',
    img:cavity
},
{
    _id :3,
    name:'Teeth whiteing',
    description:' ',
    img:whitening
},

   ]
    return (
        <div className='my-28'>
           <div className='text-center text-xl font-bold uppercase '>
               <h3 className=' text-primary'>Our Service</h3>
               <h2 className='text-3xl'> Service We Provide</h2>
               </div> 
              <div className=' grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 pt-4 '>
                     {
                       services.map(service=> <Service key={service._id} service={service}></Service>)
                         
                     }

              </div>

        </div>
    );
};

export default Services;