// Write a function that outputs a greeting. It should take an argument “name” and greet the individual.
// Call your function using console.log(myFunction(“some name”));


function greet(name) {
    console.log("Greetings," + " " + name);
}
greet("Lacey");



// Write a function that gives the approximate circumference of a circle given the diameter.

function findCircumference(diameter) {
    return Math.PI * diameter; // formula to find circumference of a circle C=pi(d)
    
}
console.log(findCircumference(10)); //make sure to use console.log or it doesn't show up in console


// Write one function that calls another function.
// Inside of the first function, insert a console.log(...) statement.
// Next, insert the call to the second function.
// The second function should have its own console.log(...) statement inside.
// Finally, after the call to the second function, insert another console.log(...) statement.


function call1(firstCall) {
    console.log("Which call are you?");
    firstCall();
}
function call2() {
    console.log("Second call!");
}
call2(call1);


// Call your first function in your program and observe the output. What happens in what order and why?

//when i called the first function it output "Second call!"

// Write a function that causes the stack to overflow.

function dog() {
    return puppy();
};
function puppy() {
    return dog();
}
console.log(dog());