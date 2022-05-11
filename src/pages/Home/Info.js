import React from 'react';
import InfoCart from './infoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
            <InfoCart cardTitle='Opening Hours' img={clock} bgclass=' bg-gradient-to-r from-cyan-500 to-primary'> </InfoCart>
            <InfoCart cardTitle='Our Locations' img={marker} bgclass='bg-accent'> </InfoCart>
            <InfoCart cardTitle='Contact us ' img={phone}  bgclass=' bg-gradient-to-r from-cyan-500 to-primary'  > </InfoCart>
        </div>
    );
};

export default Info;