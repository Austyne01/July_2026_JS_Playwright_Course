//call this function back later
//passing a function as another function parameter

/**
 * @param{function}callback
 */




function print(){
    console.log('print hello world');
}

//1. call the function testing by passing the print function as parameter

testing(print);

//2. calling the testing function by passing anonymous function

function testing(callback){
    console.log('hello')
    callback();
}

let anony=function (){
console.log('calling anonymous function');
}

//3. call using the anony func named expression
 testing(anony);// --> 

 testing(function (){
console.log('calling anonymous function'); //calling by passing the entire anonymous function
});

//4. Call by passing the arrow function

testing(()=>{
    console.log('calling arrow function');
})

let click=()=>console.log('arrow with a named expression');
testing(click);

//add, mul, sub,div arrow functions

let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let div=(a,b)=>a/b;
let mul=(a,b)=>a*b;

//front facing function with a callback

function calculator(callback,a,b){
    console.log('calculating the operation..')
    return callback(a,b);
}

let res=calculator(div, 10, 20);
console.log(res);

//passing both arrow function and parameters together

function printing(callback,x,y){
    console.log('printing..')
    callback(x,y);
}


printing((a,b)=>{
    console.log(a+b);
},100,900);

//

function action(callback1,callback2,num){
    console.log('doing something')
    callback1(num);
    callback2(num);
}

function coding(number){
    console.log(`coding with ${number}`)
}

function writing(number){
     console.log(`writing with ${number}`)
}

action(coding,writing,90);


//callbackAction example relates to playwright web elements perform action
/**
 * 
 * @param {function} callbackAction 
 * @param {string} element 
 */
function perform(callbackAction, element){
    console.log('do some action');
    callbackAction(element);
}


function click(element){
    console.log('click on ', element);
}

function fill(element1){
    console.log('fill text ', element1);
}



perform(click, 'loginButton');
perform(fill, 'textbox');

function perform(callbackAction, element){
    console.log('do some action');
    return callbackAction(element);
}

function getText(element2){
    console.log('get textn ', element2);
    return 10;
}
let dis=perform(getText, 'header');
console.log(dis);

//passing callback arrow function and the object as a whole in the argument

function getUserDetails(callback,userObj){
    console.log('calling user obj');
    callback(userObj);
}

getUserDetails((user=>{
    console.log('call the user',user);
}),['Mahesh',20,true]);
