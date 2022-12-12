import React from 'react';
import Text from './Text.js';

class PersonalInfo extends React.Component {
  constructor(props){
        super(props)
  }

  render(){
      return(
          <div>
            <Text default="First Name"/>
            <Text default="Last Name"/>
            <Text default="Email"/>
            <Text default="Phone Number"/>
          </div>
      )    
    }
}

export default PersonalInfo