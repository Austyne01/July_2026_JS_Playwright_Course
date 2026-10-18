let x=100;
let y=200;

let a='selenium'
let b='playwright'

console.log(x+y);
console.log(x+a);//100selenium
console.log(b+a);//playwrightselenium
console.log(x+y+a+b);//300seleniumplaywright
console.log(a+b+x+y);//seleniumplaywright100200
console.log(a+b+(x+y));//seleniumplaywright300
console.log(a+b+(x+y));
let x=100;
let y=200;
console.log('the value of x: '+100);
console.log('the value of x: '+x);
console.log('the value of x: '+(x+y));

console.log(100n+'Austin');
console.log(1-'1');//0
console.log(1+'1');//11
console.log('10'-'5');
console.log('hello'-5);
console.log('10'+'5');
console.log(1*'1');//11
console.log('20'/'5');
console.log(20*'5');

//exponential: **
console.log(2**3);
console.log("2"**3);

//Unary operator:

console.log(+"42"+5);//42+5=47
let salary="2000";
console.log(salary+1000);//20001000
console.log(+salary+1000);//2000+1000

console.log(+"Austin"+100);//NAN

//unary negation

console.log(-"42"+100);//-42+100=58
let marks="900";
console.log(marks+10);//90010
console.log(-marks+10);//-890

console.log('42'+2);
console.log('42'-2);//42-2=40

console.log("100n"+100n);