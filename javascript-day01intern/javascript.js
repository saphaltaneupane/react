console.log("start");
setTimeout(function cb(){
    console.log("callback");
}, 5000);
//event loop is used here basically first global excution context is created and first start is printed and 
// end is printed and clears global execution context 
//event loop checks if there is any callback in the event queue
// and since there is a callback in the event queue it executes it after 5 seconds.
// but the callback is put in the event queue and after 5 seconds it is executed.
console.log("end");

document.getElementById("btn").addEventListener("click", function cb(){
    console.log("callbackk")
});
console.log("end");
//we need to callback function to be executed when the button is clicked if the call stack is empty then only it executes slowly slowly
//microtask fetch()  PRIORITY 
//First: Event Loop Basics

// JavaScript runs on one thread → it can do one thing at a time.
// But we also want async tasks (like setTimeout, fetch, Promise) → that’s where queues come in.

// There are two important queues:

// 🥇 Microtask Queue

// Stores microtasks (very high priority).

// Examples:

// Promise.then()

// queueMicrotask()

// MutationObserver

// 👉 These always run before callbacks from the callback queue.

// 🥈 Callback Queue (a.k.a. Task Queue / Macrotask Queue)

// Stores macrotasks.

// Examples:

// setTimeout

// setInterval

// setImmediate (Node.js)

// 👉 These run after microtasks are finished.

// 🧠 Rule of the Event Loop

// Run all synchronous code (normal JS top to bottom).

// Empty the Microtask Queue (run all of them).

// Then run one task from the Callback Queue.

// Repeat.

// 📜 Example
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// 🧩 Step by Step

// "Start" → printed immediately.

// setTimeout(..., 0) → goes to Callback Queue.

// Promise.resolve().then(...) → goes to Microtask Queue.

// "End" → printed immediately.

// Call Stack is empty → Event Loop checks queues.

// Microtask Queue has "Promise" → runs it first.

// Then Callback Queue has "Timeout" → runs it next.

// ✅ Output
// Start
// End
// Promise   ← Microtask first
// Timeout   ← Callback after

// 📊 Visualization
// Call Stack (executes code directly)
//  ↓
// Microtask Queue (Promises, queueMicrotask) → always first
//  ↓
// Callback Queue (setTimeout, setInterval) → after microtasks
//  ↓
// Event Loop (decides what to run next)


// 💡 So:

// Microtasks = urgent tasks → run first.

// Callback Queue = normal async tasks → run after microtasks.

// 👉 Do you want me to also make you a real-life analogy (like “kitchen orders”) so you can imagine microtasks vs callback queue in daily life?

// You said:
// what about priorities in these in microstack queue 
// ChatGPT said:

// Nice 👌 you’re asking about priorities inside the microtask queue itself.
// Let’s go step by step and clear it out.

// 🥇 Microtask Queue Priority

// All microtasks are executed in the order they were added (FIFO — first in, first out).

// Once the call stack is empty, the event loop runs the entire microtask queue before touching the callback queue.

// While running, if new microtasks are added, they are also executed before moving to callback queue.

// 📜 Example 1: Simple Order
// Promise.resolve().then(() => console.log("Microtask 1"));
// Promise.resolve().then(() => console.log("Microtask 2"));
// Promise.resolve().then(() => console.log("Microtask 3"));

// setTimeout(() => console.log("Timeout"), 0);


// Execution:

// Stack empty → microtasks run first.

// Run "Microtask 1", "Microtask 2", "Microtask 3" in order.

// Then go to callback queue → "Timeout".

// ✅ Output:

// Microtask 1
// Microtask 2
// Microtask 3
// Timeout

// 📜 Example 2: Adding Microtasks inside Microtasks
// Promise.resolve().then(() => {
//   console.log("Microtask 1");
//   Promise.resolve().then(() => console.log("Microtask 2"));
// });

// setTimeout(() => console.log("Timeout"), 0);


// Execution:

// Run "Microtask 1".

// While running, a new microtask ("Microtask 2") is added.

// The event loop will finish this new microtask before moving to callback queue.

// Only after that, "Timeout" runs.

// ✅ Output:

// Microtask 1
// Microtask 2
// Timeout

// 📜 Example 3: Mixing Promises and queueMicrotask
// Promise.resolve().then(() => console.log("Promise microtask"));
// queueMicrotask(() => console.log("queueMicrotask"));

// setTimeout(() => console.log("Timeout"), 0);


// 👉 Both Promise.then and queueMicrotask go to the microtask queue.
// They follow the order they were added.

// ✅ Output:

// Promise microtask
// queueMicrotask
// Timeout

// 🔑 Priority Rules Recap

// Microtask queue is always emptied before callback queue.

// Inside microtask queue, tasks run in order of arrival.

// If new microtasks are created while running, they are added at the end of the queue and executed before moving to callback queue.

// 💡 Think of it like this:

// Microtasks = VIP customers → they all get served first, even if more VIPs arrive while serving.

// Callback queue = regular customers → they wait until all VIPs are done.

