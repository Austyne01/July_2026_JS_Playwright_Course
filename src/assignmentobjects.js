//Q1. Create an object named student with the properties: name, age, course, isEnrolled and city.
//Print the complete object, then print only the name and course on a single line


let student={
    name:'Austin',
    age:38,
    course:'Playwright',
    isEnrolled:true,
    city:'Mumbai'
}

console.log(student);

console.log(`student name is ${student.name} and the course is ${student.course}`);

/*Q2. Create an object loginPage that stores the locators of a login page: usernameField,
passwordField, loginButton, forgotPasswordLink. Store XPath or CSS strings as values. Print
each locator with a message like:  'Locator for login button is:
//button[@id="login"]*/

let loginPage={
    usernameField: '#username',
    passwordField: '#password',
loginButton: "//button[@id='login']",
forgotPasswordLink: "//a[text()='Forgot Password?']"    
}


for(let key in loginPage){
    console.log(`Locator for ${key} is ${loginPage[key]}`);
}

/*3. Create an object browserConfig with browserName, headless (boolean), timeout (number)
and baseUrl. Print: 'Launching chrome in headless mode with timeout 30000 on
https://...' using the values from the object.*/

const browserConfig={
browserName:'chrome',
headless:true,
timeout:30000,
baseUrl:'http://www.facebook.com'
}


console.log(`Launching ${browserConfig.browserName} in headless ${browserConfig.headless} mode with timeout ${browserConfig.timeout} on ${browserConfig.baseUrl}`);

/*Q4. Start with the object below and perform the operations in order. Print the object after every
step.
let employee = {
name: 'Robert',
age: 30,
salary: 34.55,
isActive: true
};
• Update salary to 55.75
• Add a new property email = 'robert@nal.com'
• Add a new property skills = ['JavaScript', 'Playwright']
• Delete the isActive property
• Print the total number of properties left in the object*/

let employee = {
name: 'Robert',
age: 30,
salary: 34.55,
isActive: true
};

employee.salary=55.75;

console.log(employee);

employee.email='robert@nal.com';

console.log(employee);

employee.skills = ['JavaScript', 'Playwright'];

console.log(employee);

delete employee.isActive;

console.log(employee);

console.log('=============================')


console.log(Object.keys(employee));

console.log(Object.keys(employee).length);

/*Q5 Create an object testCase with id, title, priority and status. Write code that checks if the
property executedBy exists in the object. If it does not exist, add it with your name. Then print
the object Hint: Look up the 'in' operator and hasOwnProperty().*/

let testCase={
    id:'TC_001',
    title:'loginTest',
    priority:'medium',
    status:'Pass/Fail'
}

//if('executedBy' in testCase){
if(testCase.hasOwnProperty('executedBy')){
    console.log('executedBy property exist');
}else{
    testCase.executedBy='Austin';
}

console.log(testCase);


/*Q6. Predict the output of the code below WITHOUT running it. Write your prediction, then run
and verify. Hint: After the assignment, how many objects are alive and how many references point to each one? What happens to
the original Naresh and Suresh objects?*/

let u1 = { name: 'Naresh', age: 40 };
let u2 = { name: 'Suresh', age: 44 };
let u3 = { name: 'Akash', age: 35 };
u1 = u2 = u3;
u3.age = 50;
console.log(u1.name, u1.age);//Akash , 50
console.log(u2.name, u2.age); //Akash, 50
console.log(u3.name, u3.age);//Akash, 50

//Answer : The original u1 and u2 references are now pointing to u3 and their own object reference is delinked from those values in the heap memory and will be available for Garbage collection


/*Q7. Q7. Predict the output of the code below. Explain in one line why the two console.log statements
print what they print.*/
let cart = { items: 2, total: 500 };
let copy = cart;
copy.items = 5;
console.log(cart.items);//5
console.log(copy === cart);//true

/*Answer : Sice copy object is also pointing to cart so the changes made in copy or cart affect the same object and hence 
cart.items changes to 5 and so is the copy===cart returns true.

/*Q8. Write a function updateCity(userObj, newCity) that changes the city inside the object
passed to it and does NOT return anything. Call it with a user object and print the object AFTER
the call. Explain in a comment why the city changed even though nothing was returned.*/

let user={
name:'Austin',
city:'Thane'
}

console.log(user);

function updateCity(userObj, newCity){
userObj.city=newCity;
}

updateCity(user,'Mumbai');

console.log(user);

//same way trying to update a value
let age=30;

function updateage(age){
    age=50;
}



updateage(age);

console.log(age);

/*Answer: 'user' and 'userObj' point to the same object in memory.
When userObj.city is updated inside the function,
the original object is modified. The city changed even though nothing was returned because
objects are passed by reference in JavaScript.*/


/*Q9. Create an object product with name, price and an inner object seller that has sellerName,
rating and location. Print the seller's rating and location using nested dot notation*/

let product={
name:'Soap',
price:35,
seller:{
sellerName:'Hamam',
rating:4.7,
location:'Mumbai'
}
};

console.log(`Seller rating ${product.seller.rating}, seller location ${product.seller.location}`);


/*Q10. Create an object testSuite with suiteName and an array property testCases that holds
three test case objects (each with id, title and status). Print the title of the second test case and
the total number of test cases.Hint: testSuite.testCases[1].title*/

let testSuite={
    suiteName:'RegressionSuite',
    testCases:[
        {id:'TC01',title:'Login Test',status:'Pass'},
        {id:'TC02', title:'Search Test', status:'Fail'},
         {id:'TC03', title:'Add to Cart', status:'Fail'}

    ]
}

console.log("Title of second test case,", testSuite.testCases[1].title);

console.log("Total no of test cases,", testSuite.testCases.length);

/*Q.11 Create an array users that holds 4 user objects (name, age, salary, isActive). Using a
simple for loop, print the name of every user whose isActive value is true.*/


let users = [

    {
        name: 'Austin',
        age: 35,
        salary: 70000,
        isActive: true
    },

    {
        name: 'Robert',
        age: 30,
        salary: 50000,
        isActive: false
    },

    {
        name: 'Aarti',
        age: 34,
        salary: 65000,
        isActive: true
    },

    {
        name: 'Tom',
        age: 28,
        salary: 45000,
        isActive: false
    }

];


for(let i=0;i<users.length;i++){
    if(users[i].isActive){
        console.log(users[i].name);
    }
}

