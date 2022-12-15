import React from 'react';
import Text from './Text.js';

class PersonalInfo extends React.Component {
  constructor(props){
        super(props)
  }

  render(){
      return(
          <div className="form-section">
            <h3>Personal Information</h3>
            <Text default="First Name" type="text"/>
            <Text default="Last Name" type="text"/>
            <Text default="Email" type="email"/>
            <Text default="Phone Number" type="number"/>
          </div>
      )    
    }
}

export default PersonalInfo