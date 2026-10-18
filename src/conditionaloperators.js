//If else statements along with conditional operators

let username='austin';

console.log('austin'===username);

let age=10;
if(age>18){
    console.log(`you are eligible to  vote`);
}else{
    console.log(`you are still under age`);
}


if (true) {
    console.log('hello world');
}
else { //dead code / unreachable code
    console.log('bye');
}

let flag = true; //csv/xls/api response/db/web

if (flag) { //true
    console.log('hello world');
}
else {
    console.log('bye!!');
}

//nested if if if....if
let marks = 86;
if (marks >= 90) { //true
    console.log('grade A');
    if (marks >= 95) { //true
        console.log('grade A++');
        if (marks === 100) {
            console.log('eligible for scholarship');
        }else{
            console.log('not eligible for scholarship');
        }
   
    }
}else {
    console.log('failed');
}


//if -  if - if --- if --- else:
//Anti - Pattern
let browser = 'chrome';

if (browser === 'chrome') {
    console.log('launch chrome');
}
if (browser === 'firefox') {
    console.log('launch firefox');
}
if (browser === 'safari') {
    console.log('launch edge');
}
if (browser === 'edge') {
    console.log('launch safari');
}
else {
    console.log('invalid browser....' + browser);
}

//eslint -- code coverage -- static analysis -- code smells
//coding score: 

let h = 10.1
let g = 10.2
let i = 20.3

console.log(h + g); //20.299999999999997

console.log((h + g) == i); //20.299999999999997 === 20.3

// 0.1+0.2
// 0101010101010101010 + 0101010101010101 = 010101010010101010 ---> 0.30000000000000004


console.log(`I love \\ \\ \'Javascript \\ \\ \\ \' coding`);

//I love \\'javascript\\\' coding
let x = 99;
let y = 9;
if (x > y) {
    console.log("Y is greater");
}
else {
    console.log("x is greater");
}