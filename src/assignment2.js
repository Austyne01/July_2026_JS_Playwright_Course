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

//Q2. Write a function isEven(num) that returns true if the number is even, otherwise false.
//  Call itwith 10, 7 and 0 and print the results. Then use the returned value inside an if/else to print 'Evennumber' or 'Odd number'

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

let nums=[10,7,0];

nums.forEach(n=>{
    let result=isEven(n);
    if(result){
        console.log(`${n} is even number , ${result}`)
    }else{
        console.log(`${n} is odd number, ${result}`)
    }
});

//Q.3 Write a function getTestStatus(passed, total) that returns 'PASS' if all tests passed,
// 'PARTIAL' if some passed, and 'FAIL' if none passed. Test with (10,10), (6,10) and (0,10).

function getTestStatus(passed, total){
    if(passed===0){
        return 'Fail';
    }else if(passed===total){
        return 'Pass';
    }else if(passed>0 && passed<total){
        return 'Partial';
    }
    else{
        return 'Invalid Input';
    }
}

let res1=getTestStatus(15,10);
console.log(res1);

let res4=getTestStatus(5,10);
console.log(res4);

let res2=getTestStatus(10,10);
console.log(res2);

let res3=getTestStatus(0,10);
console.log(res3);

//Q4. Write a function launchBrowser(browserName) exactly like the classroom example, butmake it case-insensitive and space-tolerant (so ' CHROME ' should still work). 
// It must returntrue for chrome, firefox, edge, safari and false for anything else. Call it with 'Chrome', ' firefox ','IE' and 'opera' and print all four results.

function LaunchBrowser(browserName){
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;

              case 'firefox':
            console.log('launch firefox');
            return true;
     case 'opera':
            console.log('launch opera');
            return true;

             case 'edge':
            console.log('launch edge');
            return true;
        default:
            console.log('Invalid browser');
return false;
    }
}

let browse=LaunchBrowser(' EDGe ');
console.log(browse);

 //Q.5 Write a function getEnvDetails() that returns an array containing: environment name,URL, port number and a boolean isProd. 
 // Call it, store the result, print the array and its length,and print only the URL from the array.

 function getEnvDetails(){
    let arr=['Prod','www.yahoo.com',8080,true];
return arr;
 }


 let arrdis=getEnvDetails();
 console.log(arrdis);
 console.log(arrdis.length);
 console.log(arrdis[1]);

 //interface for creating the objects
 //used to create/define the schema for the objects
//Part B - Functional Expressions , Anonymous and Arrow Functions
 //Q6. Convert the following normal function into (a) an anonymous function expression and (b) anarrow function. All three versions must give the same output.
 
 function getFullName(firstName, lastName) 
 {return firstName + ' ' + lastName;

 }
 console.log(getFullName('Naveen', 'Khunteta'));


 let rt=getFullName('Austin','Monteiro');
 console.log(rt);

//anonymous function
let rt1 = function(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(rt1('Naveen', 'Khunteta'));

//arrow function
let arr = (firstName, lastName) => firstName + ' ' + lastName;
console.log(arr('Naveen', 'Khunteta'));

//Q7. Write the following arrow functions. Use the SHORTEST valid syntax for each (drop () andreturn where allowed).
//• square - takes one number, returns its square

let sqr=(num)=>num*num;
console.log(sqr(5));

 //toUpper - takes one string, returns it in upper case

 let upp=(name)=>name.toUpperCase();
 console.log(upp('austin automation'));

  //isAdult - takes age, returns true if age >= 18

  let isAdult=(age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
  }
 console.log(isAdult(21));


  //shortest way
let isAdultw = age => age >= 18
 console.log(isAdultw(22));

//sayHi - takes nothing, prints 'Hi!'

let hi=()=>console.log("Hi");
hi();

//average - takes three numbers, returns their average

let avg=(a,b,c)=>(a+b+c)/3;
console.log(avg(5,10,15));

//Q8. Named function expression - predict the output of each line. Which line(s) will throw an errorand why?

let getData = function getUserDetailsFromDashboard(username)
 {console.log('getting details for:', username);
    return 200;
};


let d2 = getUserDetailsFromDashboard('Naveen');
console.log(d2);//error getUserDetailsFromDashboard is not defined

let d1 = getData('Surbhi');
console.log(d1);//getting details for: Surbhi 200

//Q9. Write an arrow function printUser(userObj) that receives a user object and prints'<name> works in <city> and earns <salary>'.
//  Call it (a) by passing an existing object variableand (b) by passing the object literal directly inside the call.



let AustinData={
        name:'Austin',
        city:'Amsterdam',
        salary:50000
    }

    let printUser=(userObj)=>{
   console.log(`${userObj.name} , works in ${userObj.city}, and earns, ${userObj.salary}`)
}

printUser({name:'Naveen',city:'Seattle',salary:100000});

printUser(AustinData);

//Part C Default Parameters
//Q10. Predict the output of every call below WITHOUT running the code. Then run and verify.

function calculate(bill, discount = 50) 
{console.log(bill - discount);

}
calculate(1000);//950
calculate(2000, 100);//1900
calculate(100, 0);//100
calculate(500, undefined);//450 - undefined is ignored and default value 50 is taken into calculation
calculate(500, null);//500 - null value is calculated as 0


//Q11. The function below has the default parameter FIRST. 
// Predict what billing(100) prints,explain why, and then rewrite the function so that it works as expected.

function billing(discount = 10, total) 
{
    console.log(total - discount);
}

billing(100);//NaN -> since discount is taken as 100 here as the first value the second value is indefinite hence indefinite-100 is also indefinite which is NaN

//correct way of writing this function
function billing(total,discount = 10) 
{
    console.log(total - discount);
}

billing(100);//100-10=90

//Q12. Write a function createTestUser(name, role = 'tester', isActive = true,country = 'India') that returns an object built from the parameters. 
// Call it four times: with 1,2, 3 and 4 arguments. Print each returned object.

function createTestUser(namee, role='tester' , isActive=true,country='India'){
    return {namee:namee,role : role, isActive : isActive,country : country}
    
}

let a1=createTestUser('Joy')
console.log(a1);

console.log(createTestUser('Merlin','developer'));

let a3=createTestUser('Akshay','contractor',false,'Canada');

console.log(a3);

//Part D
//Q13. Predict the output. Which call works, which one fails, and what is the exact error message?

create();//function declaration hoisted with the function body o/p-> create the element
function create() 
{console.log('create the element');

}
click();//hoisting - call before declaration error ->Cannot access 'click' before initialization
let click = function () 
{console.log('click on the element');

};

//Q14. Predict the output of both calls. Then explain in 2-3 lines: does JavaScript support functionoverloading like Java? 
// What actually happens when two functions have the same name?

function login() 
{console.log('login with no params');}

function login(username) 
{console.log('login with:', username);}

function login(username, password)
 {console.log('login with:', username, password);}

 login();
 login('naveen');

 //Function overloading doesn't work in javascript as compared to java because in the stack the methods follow the last in first out method where 
 //it will pick the method name written last rather than calling on the basis of number of arguments passed for the same method name


 //Q15. A student wrote the code below and asked: 'why is it printing undefined?'. 
 // Predict theoutput, explain the reason in a comment, and fix the code so that the last line prints Named Expression Function Naveen

 let smallName = function thisIsMyBigName(param)
  {
    console.log('Named Expression Function', param);

  };

 let pop = smallName('Naveen');
 console.log(pop);

 //Since the function only prints the console log and doesnt return any value by itself therefore the undefined in the output
 //corrected code if we don't store and print then it should only return what we need
 console.log('=========================');

 smallName('Naveen');


 //Q16. Predict the output, then explain what happens with the extra argument 100 and the 
 // missing return.

 function getFinalSalary(ctc, sharePrice, foodCoupon) {
    let finalSalary = ctc + sharePrice;
    console.log(finalSalary);

}
let s = getFinalSalary(10000, 1000, 100);
console.log(s);//110000 undefined
console.log(typeof getFinalSalary); //function

console.log('=======================')
getFinalSalary(900,100,500);//1000

//Nothing happens with the extra 100 its just a code redundancy which should be avoided for efficiency 
//Also the unused value later or get cleared fro the memory by the GC process(garbage collector)

//Part E
//Q17. The classroom function chain (login -> search -> addToCart -> logout -> login ...) neverstops. 
// Rewrite the same chain so that it runs exactly ONCE in the order login, search,addToCart, logout, and then prints 'Test completed'. Do NOT call login() from inside logout().


function login(){
    console.log('login to app');
    search();
}

function search(){
    console.log('search the product');
    addToCart();
}

function addToCart(){
    console.log('add product to the cart');
    logout();
}
function logout(){
    console.log('logout from the app');
    console.log('Test Completed');
}

login();


//Q18. Write a function getCustomerInformation(username) that returns a user object for'pritam', 'pooja' and 'robert' (like the classroom example)
//  and returns null for unknown users.Then call it with 'tom' and print userData.name. What error do you get? Fix the calling code sothat it prints 'User not found' instead of crashing.
//hint :    Hint: Always check the returned value before using it: if (userData) { ... }


function getCustomerInformation(username){
    let cleanname=username.trim().toLowerCase();
if (cleanname==='pritam'){
    return{name:'Pritam',age:33,salary:50000,isActive:true};
}else if(cleanname==='pooja'){
    return{name:'Pooja',age:43,salary:60000,isActive:true};
}else if(cleanname==='robert'){
    return{name:'Robert',age:23,salary:70000,isActive:false};
}else{
    return null;
}
}
 let udata=getCustomerInformation(' PRItam ')
 //console.log(udata.name);//TypeError: Cannot read properties of null (reading 'name')
console.log(udata);
 console.log('=========================');
 //correct way
 if(udata){
   console.log(udata.name);
 }else{
console.log('User not found');
 }


 //Q19. Build a mini test-runner using only functions:• setup(browser) - prints 'Setup done for <browser>' and returns true• runTest(testName, shouldPass) 
 // - prints the test name and returns 'PASS' or 'FAIL' based onshouldPass• teardown() - prints 'Browser closed'• execute(browser, tests) 
 // - accepts a browser name and an array of {name, shouldPass} objects,calls setup once, runTest for every object using a loop, counts PASS/FAIL, calls teardown, and finallyreturns a summary object { total, passed, failed }


 function setup(browser){
    console.log(`setup done for ${browser}`);
    return true;
 }

function runTest(testName, shouldPass){
    console.log('running',testName);
    if(shouldPass){
        return 'PASS';
    }else{
        return 'FAIL';
    }
}

function teardown(){
    console.log('browser closed');
}

(browser,tests)=>{

}





