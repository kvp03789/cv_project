import React from 'react'

class Education extends React.Component {
  constructor(){
      super()

  this.state = {
      list: [],
      displayForm: false,
      counter: 0,
      titleAwarded: '',
      schoolName: '',
      from: '',
      to: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const newObj = {};
    newObj.titleAwarded = this.state.titleAwarded;
    newObj.schoolName = this.state.schoolName;
    newObj.from = this.state.from;
    newObj.to = this.state.to;
    newObj.key = this.state.counter

    this.setState({
      list: [...this.state.list, newObj],
      displayForm: false,
      counter: this.counter++,
    })
  }

  render(){
    if(!this.state.displayForm){
      return(
        <div className="form-section">
          <h3>Education and Training</h3>
          <div>
            {this.state.list.map((i) => (
              <div className="list-item" key={i.key}>
                <div className="list-field">
                  <h5>Qualification:</h5>
                  <p>{i.titleAwarded}</p>
                </div>
                <div className="list-field">
                  <h5>School Name:</h5>
                  <p>{i.schoolName}</p>
                </div>
                <div className="list-field">
                  <h5>Date Started:</h5>
                  <p>{i.from}</p>
                </div>
                <div className="list-field">
                  <h5>Date Graduated:</h5>
                  <p>{i.to}</p>
                </div>
                <button className="delete-button" onClick={() => {this.setState({list: this.state.list.filter(j => j.key !== i.key)})}}>Delete</button>
              </div>
            ))}
          </div>
          <button className="add-button" onClick={() => {this.setState({displayForm: true})}}>
            Add
          </button>
        </div>
      )
    }
    else{
      return(
        <div className="form-section">
          <h3>Education and Training</h3>
            <form>
              <input placeholder="Diploma/Certificate" onChange={(e) => {this.setState({titleAwarded: e.target.value})}}></input>
              <input placeholder="School Name" onChange={(e) => {this.setState({schoolName: e.target.value})}}></input>
              <input placeholder="Start Date" onChange={(e) => {this.setState({from: e.target.value})}}></input>
              <input placeholder="End Date" onChange={(e) => {this.setState({to: e.target.value})}}></input>
            </form>
            <button onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
        </div>
      )
    }
  }
}

export default Education