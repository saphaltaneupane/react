// function hello(){
//     let name="saphalta";
//     function displayName(){
//         console.log("hello"+name);
//     }
//     displayName();
// }
// hello();

// function parent(){
//     let name="saphalta";
//     let age=22;
//     function child(){
//         console.log("hello"+name+"  age ="+age);
//     }
//     child();
// }
// parent();

function makeCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };


}
const counter=makeCounter();
counter();
counter();
counter();
