import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';
import Babycare from './Babycare'
import MakeAppoentment from './MakeAppoentment';
import Testimonials from './Testimonials';
import Contactusfeild from './Contactusfeild';
import Footer from './Footer';
const Home = () => {
    return (
        <div className='px-12'>
     <Banner></Banner>
            <Info></Info>
                   <Services></Services>
                  <Babycare></Babycare>
        <MakeAppoentment> </MakeAppoentment>
        <Testimonials></Testimonials>
        <Contactusfeild></Contactusfeild>
        <Footer></Footer>
        </div>
    );
};

export default Home;