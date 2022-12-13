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
    this.tempVal=this.props.default;
    
  }

  handleEdit(){
    this.setState({edit: true})
  }

  handleChange(e){
    this.tempVal = e.target.value
  }

  handleSave(){
    if(this.tempVal === this.props.default){
      this.setState({edit: false, value: this.tempVal})
    }else{
      this.setState({edit: false, value: this.tempVal})
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    if(!this.state.edit){
      return(
        <div className="input-container">
            <p className="personal-info-paragraph">{this.state.value}</p>
            <button onClick={this.handleEdit}>
              Edit
            </button>
        </div>
      ) 
    } else {
      return(
        <div className="input-container">
            <input type={this.props.type} className="personal-info-text-input" onChange={(e) => {this.handleChange(e)}} placeholder={this.edit===false?this.props.default:this.state.value}>
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