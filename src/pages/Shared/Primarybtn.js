import React from 'react';

const Primarybtn = ({children}) => {
    return (
        <div>
              <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-primary ">{children}</button>
        </div>
    );
};

export default Primarybtn;