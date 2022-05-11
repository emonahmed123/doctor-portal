import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
              Available Appoinments on {format(date, 'PP') }
        </div>
    );
};

export default AvailableAppointments;