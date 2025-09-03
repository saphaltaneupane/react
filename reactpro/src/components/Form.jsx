import {useState} from "react";

export default function Form(){
    const [name,setName]=useState({firstName:"", lastName:""});

   function handleSubmit(e){
    e.preventDefault();
    console.log(name.firstName);
    console.log(name.lastName);
   }
    return <div>
        {name.firstName} {name.lastName}
        <form >
            <input  
            // onChange={function demo(e){return handleChange(e);}
            onChange={(e)=>setName({...name, firstName:e.target.value})}
         type="text"  value={name.firstName}/>
         <input
            onChange={(e)=>setName({...name,  lastName:e.target.value})}
         type="text"  value={name.lastName}/>
         <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>
} 