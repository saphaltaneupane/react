function hello() {
	console.log("1");   
}
function hello2() {
	console.log("2");
}
console.log("start");
hello();
hello2();
console.log("end"); 


// Execution Context & Call Stack

// Everything in JS runs inside an execution context (like a box).
// When a function is called, it’s pushed to the call stack. When it finishes, it pops off.
function one(){
    console.log("one");

}
function two(){
    console.log("two");
    
}
function three(){
    console.log("three");
}
one();
setTimeout(two, 0);
three();
