
import React from 'react'
import ReactDOM from 'react-dom'
import AppointmentForm from './appointment_form'
import { AppointmentsList } from './appointments_list'
import update from 'immutability-helper'


export default class Appointments extends React.Component {
  //use constructor to set initial state
  constructor(props){
      super(props)
      this.state={
          title: "A Test Event",
          appt_time: "25 January 2016 9am",
          appointments: props.appointments,
      };
      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.addNewAppointment = this.addNewAppointment.bind(this);
    }
  handleUserInput(obj){
    this.setState(obj);
  };
  
  handleFormSubmit(){
    var appointment = {title: this.state.title, appt_time: this.state.appt_time}
    $.post('/appointments', {appointment: appointment})
          .done(function(data) {
            this.addNewAppointment(data);
          }.bind(this));
  }
  
  addNewAppointment(appointment){
    const appointments = update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments });
  }
  
  render(){
    return(
      <div>
        <AppointmentForm title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}/>
        
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})

