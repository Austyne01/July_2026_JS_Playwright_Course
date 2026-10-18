
//Function - generic piece of code- statement/logic/calculations/buss logic - return/void

//1. Simple function - no return value, no parameter

function test(){           //declared
    console.log('test function called');
}   

test();                   //called
console.log(typeof test); //function

//2. Function with no return but with parameter


/**
 * This add function is used to add two numbers and print the sum
 * @param {number} a 
 * @param {number} b 
 */
function add(a,b){ //declared
    console.log('sum =', a+b);
}

add(10,20); //called by passing the values to the parameters

add(); //called by passing the values to the parameters

add('Austin', 'Pune'); //called by passing the values to the parameters
/**
 * 
 */

//return type void

/**
 * 
 * @param {String} element 
 */

function clickonelement(element){
    console.log('click on element', element);
}

clickonelement('search button');


//Function with return: some input , some return
//add two numbers

/**
 * Add two numbers and return a value
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */

function adding(x, y){
    let sum=x+y;
    return sum;
}

//console.log(adding(5,4));//directly printing on the console
let res=adding(8,7);
console.log(res*9);//storing in a variable and then printing 

//return value storing ina variable

/**
 * 
 * @returns {String}
 */

function automatorname(){
    return 'Austin';
}

let atn=automatorname();

console.log(atn)
if(atn==='Austin'){
    console.log('legit');
}else{
    console.log('fraud')
}

//WAF: Write a function to launch a browser
//Parameter: browserName(string)

/**
 * Function to check browsername and launch url accodingly
 * @param {String} browserName 
 * @returns 
 */

function launchBroswer(browserName){
    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log('valid broswser');
            return true;

            case 'Firefox':
                console.log('valid broswser');
                return true

                case 'safari':
                console.log('valid broswser');
                return true

                default:
                    console.log('invalid broswername..pls provide a valid browser');
                    return false;
    }
};

let browValue=launchBroswer('IE');

if(browValue){
    console.log('launch url-"www.google.com');

}

/**
 * 
 * @returns array
 */

function empData(){
    let userInfo=['Vijay', 33, 'Pune', true,'9920099200'];
    return userInfo;
}

let vijayData=empData();
console.log(vijayData);
