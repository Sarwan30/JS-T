// Immediately Invoked Function Expression
// Avoid Polluting the Global Scope means keeping your code clean and organized by not adding too many variables or functions to the global space (the main environment where all JavaScript runs).

(function db() {
    // Named IIFE
    console.log(`DB1 Connected`);
})();  // Use Semicolon Always to Stop the execution of IIFE, Otherwise it will create some conflict to run in another execution of lines


// Using Arrow Function
( (name) => {
    console.log(`DB2 Connected`);
    console.log(`Hello ${name}, All Databases are Connected`);
})('Shravan');

/*
JavaScript Execution Context
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context


Steps of Execution
1. Global Execution Phase
2. Memory Creation Phase (Creation Phase)
    val1 -> undefined
    val2 -> undefined
    addnum -> definition
    result1 -> undefined
    result2 -> undefined
3. Execution Phase
    val1 = 10
    val2 = 2
    addnum -> 
            New Environment + Execution thread
            1. Memory Creation Phase
                val1 -> Undefined
                val2 -> Undefined
                total -> Undefined
            2. Execution
                num1 = 10
                num2 = 2
                total = 12  // and return the value to the Global Execution
            3. Delete itself (after the execution of the function the sandbox is deleted automatically after returning the value.)
*/ 