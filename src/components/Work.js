import React from 'react'

class Work extends React.Component {
    constructor(){
        super()

      this.state = {
        list: [],
        displayForm: false,
        counter: 0,
        jobTitle: '',
        company: '',
        from: '',
        to: '',
      }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
      const newObj = {};
      newObj.jobTitle = this.state.jobTitle;
      newObj.company = this.state.company;
      newObj.from = this.state.from;
      newObj.to = this.state.to;
      newObj.key = this.state.counter
  
      this.setState({
        list: [...this.state.list, newObj],
        displayForm: false,
        counter: this.state.list.length - 1
      })
    }

    render(){
      if(!this.state.displayForm){
        return(
          <div className="form-section">
            <h3>Work Experience</h3>
            <div>
              {this.state.list.map((i) => (
                <div className="list-item" key={i.key}>
                  <div className="list-field">
                    <h5>Job Title:</h5>
                    <p>{i.jobTitle}</p>
                  </div>
                  <div className="list-field">
                    <h5>Company Name:</h5>
                    <p>{i.company}</p>
                  </div>
                  <div className="list-field">
                    <h5>Date Started:</h5>
                    <p>{i.from}</p>
                  </div>
                  <div className="list-field">
                    <h5>Date Ended:</h5>
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
            <h3>Work Experience</h3>
              <form>
                <input placeholder="Job Title" onChange={(e) => {this.setState({jobTitle: e.target.value})}}></input>
                <input placeholder="Company Name" onChange={(e) => {this.setState({company: e.target.value})}}></input>
                <input placeholder="Start Date" onChange={(e) => {this.setState({from: e.target.value})}}></input>
                <input placeholder="End Date" onChange={(e) => {this.setState({to: e.target.value})}}></input>
              </form>
              <button onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
          </div>
        )
      }
    }
}

export default Work