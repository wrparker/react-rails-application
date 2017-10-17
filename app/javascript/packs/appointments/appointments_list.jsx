import React from 'react'
import {Appointment} from './appointment'

export const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id} />
      )
    })}
  </div>