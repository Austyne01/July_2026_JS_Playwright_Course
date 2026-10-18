let x=10;
console.log(x);
console.log(typeof (x));

let u=-1000;
console.log(u);
console.log(typeof (u));

let i;
console.log(i);
console.log(typeof i);

//String

let name='Austin';
let username ='Austin Automation';
console.log(name);
console.log(username)

let p='1000';
console.log(p);
console.log(typeof p);
console.log(name, username, p, typeof name, typeof (p));
//mobile number, FAX < SSN , Aadhar card, Credit card
//always use string

let myMobileNumber= '+91-9324262226';
let ccNumber='1232 4545 1618 7098';

//boolean: true/false
//size: 4 bytes=32 bits irrespective of whether true or false
let isEmpExist=true;
console.log(isEmpExist);
console.log(typeof isEmpExist);

let bool=5>6;
console.log(bool);





//null: no value; object relate operations
//size: 0 bytes

let user=null;
console.log(user);
console.log(typeof null);//object --legacy bug in java

//undefined

let nobody=undefined
console.log(nobody);
console.log(typeof nobody);

//var vs let vs const

//var --keyword/identifier to declare a variable in JS

//redeclaration is allowed in var
var i=10;
var i=20;
console.log(i);//20

var loginbutton='login';
var loginbutton='Continue';

//let -- keyword /identifier
//redeclaration is not allowed:error
let k =10;
let k=20;
console.log(k);

//const: keyword/identifier to declare a constant variable
//error assignment to a constant variable
const PI=3.14;
PI=9.11;
console.log(PI);

//hoisting: access the variable before declaring it

console.log(m);
var m=100;
console.log(m);

//hoisting not allowed with let 
console.log(m);
let m=100;
console.log(m);

//hoisting not allowed with constant
console.log(studentname);
const studentname='austin';

let test=30;
console.log(typeof test);
test='automation';
console.log(typeof test);
 test=true;

console.log(typeof test);