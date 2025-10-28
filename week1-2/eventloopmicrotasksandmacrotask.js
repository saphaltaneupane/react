console.log("a");
setTimeout(() => {
    console.log("b");
},0);
// Promise.resolve().then(()=>{
//     console.log("c");
// })
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => {
    console.log("c");
});
console.log("d");