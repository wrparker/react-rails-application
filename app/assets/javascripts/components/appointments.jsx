class Appointments extends React.Component {
  //use constructor to set initial state
  constructor(props){
      super(props)
      this.state={
          title: "Testing",
          appt_time: "Yesterday",
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
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments });
    console.log(this.state.appointments);
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