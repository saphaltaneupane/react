async function getData(){
    console.log("okay first enter getdata");
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data=await response.json();
    console.log("data received");
    console.log(data);
    
}
getData();
console.log("after calling getdata");