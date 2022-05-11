import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Primarybtn from '../Shared/Primarybtn';
const MakeAppoentment = () => {
    return (
          <section style={{
              background:`url(${appointment})`
          }} 
          className='flex justify-center items-center'>
                <div className='flex-1  hidden lg:block'>
                            <img className='mt-[-100px]' src={doctor} alt="" />
                </div>
                    <div className='flex-1'>
            <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                                       <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                                       <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor aliquam neque expedita obcaecati tempora a quae sed architecto est!
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor aliquam neque expedita obcaecati tempora a quae sed architecto est!
                                       
                                           </p>  
                                           <Primarybtn>Get Started</Primarybtn>
                    </div>

          </section>

    );
};

export default MakeAppoentment;