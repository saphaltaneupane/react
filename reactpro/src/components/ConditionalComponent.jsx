import React from 'react'
import Welcome from './Welcome'
import Codes from './Code'  
const ConditionalComponent = () => {
    const display= true;
   if(display){
return <Welcome />;
   }else{
       return <Codes />;
   }
}

export default ConditionalComponent;
