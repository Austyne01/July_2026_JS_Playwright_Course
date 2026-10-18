//Q1. Write four functions as described below. Call each one and print the result wherever a valueis returned

// printWelcome() - no parameter, no return; prints 'Welcome to Naveen Automation Labs'

function printWelcome(){
    console.log('Welcome to Naveen Automation Labs');

}

printWelcome();

//greetUser(name) - one parameter, no return; prints 'Hello, <name>'

function greetUser(name){
    console.log('Hello',name);
}

greetUser('Austin');

//getBatchName() - no parameter, returns the string 'Playwright Batch

function getBatchName(){
    return 'Playwright batch';
}

let res=getBatchName();
console.log(res);

//subtract(a, b) - two parameters, returns a - b

function subtract(a,b){
return a-b;
}

let sub=subtract(7,4)
console.log(sub);