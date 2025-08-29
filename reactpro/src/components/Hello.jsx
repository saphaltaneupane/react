// const name="Rob";

// function displayMessage(){
//     return "Good Morning";
// 
// }
// {displayMessage()} 
function Hello(props){
    //destructing props like below
    // const{name,message}=props;
    //props cant be changed it is read only it is immutable props.name="Saphalta" cant be written  
    return <h1>Hello {props.person.name}  {props.person.message} {props.person.seatNumbers} </h1>;
}
export default Hello;

// function Hello({name,message}){  //destructing props in parameter itself
//     return <h1>Hello {name}  {message}  </h1>;
// }
// export default Hello;
