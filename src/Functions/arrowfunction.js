//arrow function: anonymous function
//syntax ()=>
    //has no function keyword
//will be used in tha callbacks ..function as parameter

//expression name : print

//arrow function with zero parameters
let print= ()=> console.log('hello world');
print();// call it using the expression name

//arrow function with one parameter
/**
 * 
 * @param {string} name 
 * @returns 
 */
let pop=(name)=>console.log('hello ', name);
pop('Ravi');


//arrow function with multiple parameters

/**
 * add two numbers function
 * @param{number}a
 * @param{number}b
 * @returns
 */

let addy=(a,b)=>{
    console.log('sum of 2 values..')
     let sum=a+b;
    return sum;
}

let printsum=addy(78,76);
console.log(printsum);

//no return keyword needed if only one line of statement 

let mul= num=>num*2;

let double=mul(31);
console.log(double);

//return needed when more than 1 statement

let x=(num1,num2)=>{
    return num1*num2;
}

let r2=x(45,56);
console.log(r2);

let y=(num1,num2)=>num1*num2;
let j2=y(90,76);
console.log('mul of two digits',j2);


/**
 * @param{string}element
 * @returns
 */

let webele=element=>{
    console.log('check if the element ',element,'is visible');
     console.log(`check if the element ${element} is clickable`);
     console.log('click the', element );
     return true;
}



let display=webele('loginbutton');
console.log(display);

/**
 * 
 * @param {String} browserName 
 * @returns 
 */
let checkBrowser=browserName=>{
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('open chrome browser url');
            return true;

            case 'safari':
            console.log('open safari browser url');
            return true;
    
            case 'firefox':
            console.log('open firefox browser url');
            return true;
    
            case 'edge':
            console.log('open edge browser url');
            return true;
    
    
        default:
            console.log('invalid browsername entered...', browserName);
            return false;
    }

}

let flag=checkBrowser('Firefox');
console.log(flag);


//create 4 functions for add, sub, mul, div

let sum=(a,b)=>console.log('sum is ',a+b);

let sub=(a,b)=>console.log('sub is ',a-b);
let multi=(a,b)=>console.log('mul is ',a*b);
let div=(a,b)=>console.log('div is ',a/b);

sum(2,3);
sub(3,7);
multi(9,8);
div(12,4);

//give a string to arrow function and convert to upper case
//if arrow function has only one param you don't need the ()
let CTU=name=>{
    newname=name.toUpperCase();
    return newname;
}
let res=CTU('sergent');
console.log(res);



//if function has 0 param then you need  to write ()

let dis=()=>console.log('hello austin');
dis();

//if arrow function has more than one param then you need ()

let cul=(a,b)=>a+b;
let tot=cul(5,6);
console.log(tot);

//arrow function using passing object

let user={
    name:'austin',
    age:38,
    isAtive:true,
    salary:40
}

let refobj=userObj=>{
    console.log(userObj.name,userObj.salary);
    return userObj;
}

let printobj=refobj(user);
console.log(printobj);








