export default function Message(){

    function handleClick(){
        alert("Hello! This is your message.");
    }

    return <div>
        <button onClick={handleClick}>Click here to get a message</button>
    </div>
}