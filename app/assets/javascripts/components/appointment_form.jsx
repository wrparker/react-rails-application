class AppointmentForm extends React.Component{
  constructor(props){
    super(props);
    /*this.onChange = this.onChange.bind(this)*/
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateApptTime = this.updateApptTime.bind(this)
  }
  handleChange(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }
  
  updateApptTime(e){
    var name = 'appt_time';
    var obj = {}
    if(obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  }
  
  
  
  render(){
    var inputProps={
      name: 'appt_time'
    }
    
    return(
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange} />
          <input name='appt_time' placeholder='Date and time'
            value={this.props.appt_time}
            onChange={this.handleChange}
            />
            
            <Datetime inputProps={inputProps}
            onChange={this.updateApptTime}
            input={false}
            open={true} />
            
          <input type='submit' value='Make an appointment' />
        </form>
      </div>
    )
  }
}