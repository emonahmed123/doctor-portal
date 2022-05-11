import React from 'react';
import treatment from '../../assets/images/treatment.png'
import chair from '../../assets/images/chair.png'
const Babycare = () => {
    
  return (
        <div className="hero min-h-screen" 
      >
        <div className="hero-content flex-col lg:flex-row px-20">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care,on Your Terms</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-cyan-500 to-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Babycare;