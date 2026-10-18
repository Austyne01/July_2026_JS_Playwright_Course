console.log('Hello, Javascript!');

let name='Austin';
const pi=3.14;
var x=10;

console.log(name, pi, x);

let biggy=10n;

console.log(typeof biggy);



//use cases:
//1. cross browsers: 
let browser='Firefox';

switch (browser.toLowerCase()) {
    case 'chrome':
        console.log('launch chrome');
        break;
        case 'safari':
        console.log('launch safari');
        break;
        case 'firefox':
        console.log('launch firefox1');
        break;
        case 'firefox':
        console.log('launch firefox2');
        break;
        case 'edge':
        console.log('launch edge');
        break;

    default:
        console.log('invalid browser...pls enter valid browsername')
        break;
}

//2. multi env: QA, stage, dev, uat, prod

let env='QA ';

switch(env.toLowerCase().trim()){

    case 'stage':
        console.log("navigate to stage url");
        break;
 case 'dev':
        console.log("navigate to dev url");
        break;
 case 'qa':
        console.log("navigate to QA url");
        let iteration=1;
        if(iteration>=2){
            console.log('use only the happy path..')
        }else{
            console.log('use end to end regression test cases')
        }
        break
        case 'uat':
        console.log("navigate to uat url");
        break;
case 'prod':
        console.log("navigate to prod url");
        break;
        default:
            console.log("invalid url, enter the correct url....");
break;
}

//3. multi roles: admin, seller, customner, partner, vnedor
let role=' AdmiN ';

switch(role.toLowerCase().trim()){
    case 'admin':
        console.log('login with admin creds');
        break;
        case 'seller':
        console.log('login with seller creds');
        break;
        case 'customer':
        console.log('login with customer creds');
        break;
        case 'partner':
        console.log('login with partner creds');
        break;
        case 'vendor':
        console.log('login with vendor creds');
        break;
        default:
            console.log('invalid role , provide proper role...')
}

//4. Localization testing: english, hindi, chinese, arabic
let lang='chindi';
switch (lang.toLowerCase().trim()) {
    case 'english':
        console.log('use english prompts');
        break;
 case 'hindi':
        console.log('use hindi prompts');
        break;
         case 'chinese':
        console.log('use chinese prompts');
        break;
         case 'arabic':
        console.log('use arabic prompts')
        break;

    default:
        console.log('invalid language, select the correct language option')
        break;
}
//5. uber: booking: car types: mini, sedan, suv, premimum, luxury
let cartype=' suv';

switch(cartype.toLowerCase().trim()){
    case 'mini':
        console.log('mini rate is rs 500');
        break;
           case 'sedan':
        console.log('sedan rate is rs 900');
        break;
           case 'premium':
        console.log('premium rate is rs 1200');
        break;
           case 'suv':
        console.log('suv rate is rs 1500');
        break;
           case 'luxury':
        console.log('luxury rate is rs 2500');
        break;
        default:
            console.log('invalid cartype, pls select proper cartype option');
}


//6. multi OS: mac, windows, linux
let OS='MAC';
switch (OS.toLowerCase().trim()) {
    case 'windows':
        console.log('windows 11 pro');
        break;
   case 'linux':
        console.log('Ubuntu shell cmd interface');
        break;
case 'mac':
        console.log('Macbook air');
        //break;

    default:
        console.log('Invalid OS, pls provide proper OS');
        break;
}



//7. API testing: status code: 200, 300, 400, 500

let httpcode=500;
switch(httpcode){
case 200:
    console.log('status ok');
    break;

    case 300:
    console.log('redirection messages');
    break;
    case 500:
    console.log('server related error');
    break;
    case 400:
    console.log('status oBad reques/client server response');
    break;
    default:
        console.log('invalid status code ...');
}
//GET/POST/PUT/DELETE
//8. loan app: loan types: home, car, edu
let loantype='EDU';
switch (loantype.toLowerCase().trim()) {
    case 'home':
        console.log('2% interest rate on home loan');
        break;
         case 'edu':
        console.log('0% interest rate on edu loan');
        break;
         case 'car':
        console.log('5% interest rate on car loan');
        break;

    default:
        console.log('no loan available for this category');
        break;
}
//9. payment: upi, paypal, stripe, cards

let paymode='upi';
switch (paymode.toLowerCase().trim()) {
    case 'upi':
        console.log('paytm');
        break;
           case paypal:
        console.log('paypal');
        break;
           case stripe:
        console.log('zebra');
        break;
           case cards:
        console.log('debit platina');
        break;

    default:
        console.log('invalid payment method, select appropriate payment mode');
        break;
}
//10. AB Testing: India, USA, UK, AUS

let country='AUS'
switch(country.toLowerCase().trim()){
    case 'India':
        console.log('use feature I');
        break;
         case 'USA':
        console.log('use feature U');
        break;
         case 'UK':
        console.log('use feature L');
        break;
         case 'aus':
        console.log('use feature A');
        break;
        default:
            console.log('invalid country code');
            break;
}


let ch=' N';

switch(ch.toLowerCase().trim()){
    case 'a':
        case 'e':
            case 'i':
                case 'o':
                case 'u':
console.log(`${ch} is a vowel`);
break;
default:
    console.log(`${ch} is a consonant`);
}

if(0){
    console.log('hello austin');
}else{
    console.log('bye austin');
}

//Section 3 Assignment

let a='Austin',b='automation';
console.log(a+b);

let poemphrase=`The woods are lovely, dark and deep,   
But I have promises to keep,   
And miles to go before I sleep,   
And miles to go before I sleep.`;

console.log(poemphrase);

let name='Sam', age=28;
console.log(`My name is ${name} and I am ${age} years old`);

console.log(2**4);

let x=2;

x+=2;
console.log(x);

console.log('hello'+5);//hello5

var a=10;
const b=3.14;
let c=a+b;
console.log(`The sum of ${a}+${b} is ${a+b}`);
console.log(`The sum of ${a}+${b} is ${c}`);


//Session 4 Assignment

console.log(true==1);
console.log(true===1);

console.log(5=='5');//true loose equality compares only values
console.log(5==='5');//false hard equality compares both values and datatype

console.log(0/0);
console.log('Austin'-4);

let res=-10/0;//-Infinity
let res=10/0;//Infinity
let resu='Austin'-4;
console.log(typeof 0/0);
console.log(res);
console.log(Infinity+100);//Infinity

let i=1;
y=i++;
console.log(y);//1 assign then increment
console.log(i);//2

let i=1;
y=++i;
console.log(y);//2 increment and assign
console.log(i);//2

 let x = 5; 
 let y = x++;
 console.log(y);//5
 console.log(x);//6

 console.log(null==undefined);//true
  console.log(null===undefined);//false

  
console.log(NaN===NaN);
isNaN(0/0);

console.log(isNaN(0/0));

// session 5 assignment

let num=-10;//output num is negative
if(num<0){
    console.log('num is negative');
}else if(num>0){
    console.log('num is positive');
}else{
    console.log('num is zero');
}

let age=77;
let result= (age>=18) ? 'eligible':'not eligible';
console.log(result);




let browser=' Chrome ';
switch(browser.toLowerCase().trim()){
case 'chrome':
console.log('initiate chrome');
break;
case 'firefox':
console.log('initiate firefox');
break;
default:
console.log('invalid browser..select the proper browser');
break;
}



let variable=value;
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//session 6 assignment  
for(let i=1; i<=10; i++){
console.log(i);
}

let i=1
whi1e(i<=5){
    console.log(i);
    i++;
}

let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

let i=10;
while(i>=1){
console.log(i);
i--;}


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Exits the loop entirely when i is 3
  }
  console.log(i);
}
console.log('Loop exited');
// Output:
// 1
// 2
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips the rest of the loop body when i is 3
  }
  console.log(i);
}
console.log('Loop exited');
// Output:
// 1
// 2
// 4
// 5
//Loop exited   

for(let i=1;i<=20;i++){
if(i%2==0){
console.log(i);
}
}

// Testing falsy vs truthy values
Boolean(0);          // false
Boolean(null);       // false
Boolean([]);         // true  (empty array is truthy!)
Boolean("false");// true  (non-empty string is truthy!)

console.log(Boolean(0));          // false
console.log(Boolean(null));       // false
console.log(Boolean([]));         // true  (empty array is truthy!)
console.log(Boolean("false"));// true  (non-empty string is truthy!)
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));  // false
console.log(Boolean(""));   // false    
console.log(Boolean(" "));  // true (non-empty string is truthy!)
console.log(Boolean("true"));  // true (non-empty string is truthy!)
console.log(Boolean("Austin"));  // true (non-empty string is truthy!)
console.log(Boolean(1));  // true (non-empty string is truthy!)
console.log(Boolean(true));  // true (non-empty string is truthy!)


let sum=0;
for(let x=1;x<=100;x++){
    sum+=x;
}
console.log(`The sum of first 100 natural numbers is ${sum}`);

let sum = 0;
let x = 1;

while (x <= 100) {
  sum += x;
  x++; // Increment x to avoid an infinite loop
}

console.log(`The sum of first 100 natural numbers is ${sum}`);

//Session 7 Assignment

let numbers=[10, 20, 30, 40, 50];
console.log(numbers[2]);
console.log(numbers.indexOf[30]);

const nums=[10, 20, 30, 40, 50];
console.log(nums[10]);

for(const num in nums){
    console.log(nums[num],'=', num);
}

console.log('=======================')
for(const num of nums){
console.log(num)
}

let fruits=['Apple', 'Chickoo','Mango','Banana','Grapes'];
fruits[0]='';
fruits[5]='Pineapple';
console.log(fruits);
fruits[0].remove;
console.log(fruits);
console.log(fruits.indexOf(''));



let empData={
    name:'Megan',
    age: 36,
    isActive:true,
    city:'Loas Angeles',
    address:{
        street:101,
        road: 'Avenue',
        pincode:400614
    },
    devices:
        ['iphone',
        'mouse',
        'keyboard'
        ]
}

//console.log(empdata);

//iterate through the object 

for(let emp in empData){
    if(emp==='address'){
        for(let e in empData[emp]){
            console.log(e, empData[emp][e])
        }
    }else if(emp==='devices'){
        for(let e of empData[emp]){
console.log(' ',e)
    }
    
}else{
        console.log(emp, empData[emp])
    }
}


// for loop

for (let i=0; i<=10; i++){
    console.log(i,'number times');
    
}

//for of loop in arrays string maps

const array=[24,87,-104,0];

for (let e of array){
    console.log(e);
}

console.log('==============================')
//using only for 
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//while loops

let p=1;
while(p<=10){
    console.log(p);
    p=p+2;
}

let l=0;
while(l<=10){
    if(l%2==0){
        console.log(l);
    }
    l++;
}

//do while loop

let d=1;
do{
    if(d%2==1){
    console.log(d);
    }

    d++;
}while(d<=50);

//break with while loop 

let num=5;
while(num<=20){
     console.log(num);
    if(num%5==0){
       console.log('hi---bye')
    }
    num++;
}

//for of looop with break for browsers

const browsers=['Firefox', 'Chrome','Edge','Safari'];

for(const br of browsers){
    
    if(br=='Edge'){
        console.log('launch edge..');
        break;
    }
    
}
console.log('=========================')
for (const ele in browsers){
    console.log(ele,browsers[ele]);
}


let user={
    name:'John Doe',
    age:37,
    city:'Porto'
}

for (let ele in user){
    console.log(ele,user[ele]);
}


//callback function without settimeout direct without arrow

function getCriminalRecord(callback){
    console.log('fetching suspect records')
callback();
}

getCriminalRecord(()=>{
    console.log('Callback Arrow function');
console.log('Criminal record found');
})

//callback function with settimeout direct without arrow
function getCriminalRecord(callback){
    console.log('fetching suspect records')
setTimeout(callback,4000);
}

getCriminalRecord(()=>{
    console.log('Callback Arrow function');
console.log('Criminal record found');
})
    
//callback function with settimeout and arrow

 function fetchRecord(callback){
    console.log('Findind details of the suspect ...')
    setTimeout(()=>{
        let suspect={
        name:'Shinde',
        age:46,
        isActive:false
    };
    callback(suspect);},5000)
 }


 fetchRecord((suspect)=>{
    console.log('suspect details found');
    for (let e in suspect){
        console.log(e,suspect[e]);
    }
    console.log(suspect.name,suspect.age);
 })


 function greet(name) {
  console.log("Hi, " + name);
}

function processUser(username, callback) {
  console.log("Processing...");
  setTimeout(()=>{
    callback(username)},4000);
}



processUser('Austin',greet)





function calling(callback,a,b){
    console.log('immediate exec');
   
    setTimeout(()=>{
        console.log('delayed exec');
        sum=a+b;
        callback(sum);
    },5000);
    console.log('when this gets executed lets see');
}

calling(((result)=>{
    console.log('I an the callback getting executed now')
    console.log('Addition result ', result)
    
}),4,5)

console.log(tv);


function adding(a,b){
    return a+b;
}

let r1=adding(2,4);
console.log(r1);


//Assignment 7

let names=['Tom','Dick','Harry'];
let arr=names.pop();
console.log(arr);
names.push('Josh');
console.log(names);

let last=names.pop();
console.log(last);

//shift and unshift

let listy=[4,5,8,9,177]

console.log(listy.indexOf(187));//-1

let ulisty=listy.shift();
console.log(ulisty);//4
console.log(listy);//[ 5, 8, 9, 177 ]

let re=listy.unshift(88);
console.log(re);//5 -> returns new array length after adding 88 to the beginning
console.log(listy);//[ 88, 5, 8, 9, 177 ]

//5. Splice method: add, remove, replace
//[start index,delete count, index]

let list=['table','chair','fan','sofa'];
let ulist=list.splice(1,2);
console.log(ulist);//[ 'chair', 'fan' ]
console.log(list);//[ 'table', 'sofa' ] --> updated list removed 2 items starting index 1

//
const numsi=[10, 20, 30, 40, 50];
for(const num in numsi){
    console.log(numsi[num],'=', num);
}

let fruits=['Apple', 'Chickoo','Mango','Banana','Grapes'];
fruits.push('Orange');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits[0]='';
fruits[5]='Pineapple';
console.log(fruits);

//slice and splice

let fruits=['Apple', 'Chickoo','Mango','Banana','Grapes'];

fruits.splice(1,2,'Papaya','Pomgrenate');
console.log(fruits);

let slice=fruits.slice(2);
console.log(slice);