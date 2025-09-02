import React from 'react'
import Welcome from './Welcome'
import Codes from './Code'  
const ConditionalComponent = () => {

 
  const display=true;

  return display?<Welcome />:<Codes />;

}

export default ConditionalComponent;
