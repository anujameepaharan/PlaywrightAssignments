/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

let inputNumber = 3;
let result = checkOddOrEven(inputNumber);
console.log(result);

function checkOddOrEven(inputNumber){
    let res = inputNumber%2;
    if (res === 0){
        return "Number is even";
    } else {
        return "Number is odd";
    }
}