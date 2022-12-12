import React from 'react'

class Text extends React.Component {
  constructor(props){
    super(props)

    this.state={
      edit: false,
      value: this.props.default
    }

    this.handleEdit=this.handleEdit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }

  handleEdit(){
    this.setState({edit: true})
    console.log(this.state)
  }

  handleChange(e){
    this.tempVal = e.target.value
    console.log(this.tempVal)
  }

  handleSave(){
    this.setState({edit: false, value: this.tempVal})
    //console.log(this.state)
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    if(!this.state.edit){
      return(
        <div>
            <p>{this.state.value}</p>
            <button onClick={this.handleEdit}>
              Edit
            </button>
        </div>
      ) 
    } else {
      return(
        <div>
            <input className="personal-info-text-input" onChange={(e) => {this.handleChange(e)}} placeholder={this.edit===false?this.props.default:this.state.value}>
            </input>
            <button onClick={this.handleSave}>
              Save
            </button>
        </div>
      )
    }       
  }
}

export default Text