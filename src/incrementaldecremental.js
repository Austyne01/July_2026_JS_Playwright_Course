//1. post increment(later)
//++ incremental operator ->increment the value by 1
//-- decremental operator -> decrement the value by 1
let a=1;
let b=a++;

console.log(a);
console.log(b);

let m=-99;
let n=m++;

console.log(m);
console.log(n);


let p=0;
let q=p++;
console.log(p);
console.log(q);

let total=10;
console.log(total);
console.log(total++);
console.log(total);

//2. pre(before) increment:

let x=1;
let y=++x;
console.log(x);//2
console.log(y);//2


let s=-999;
let d=++s;
console.log(s);//-998
console.log(d);//-998

let pop=10
console.log(++pop);

//3. post(later) decrement
let i=2;
let j=i--;

console.log(i);//1
console.log(j);//2


//4. pre (before) decrement

let k=2;
let g=--k;

console.log(k);//1
console.log(g);//1

let bill=-99;
console.log(--bill);//-100
console.log(bill);//-100

let marks=900;
console.log(marks--);//900
console.log(marks);//899

let i=11;
let j=i++ + ++i;

console.log(i);//13
console.log(j);//24


let a=11;
let b=22;
let c=a + b + a++ + b++ + ++a + ++b;

console.log(a);//13
console.log(b);//24
console.log(c);//103

let i=0;
let j=i++ - --i + ++i - --i;

console.log(i);//0
console.log(j);//1

let i=1, j=2,k=3;
let m= i-- - j-- - k--;

console.log(i);//0
console.log(j);//1
console.log(k);//2
console.log(m);//-4

let m=0, n=0;
let p=--m * --n * n-- * m--;

console.log(m);//-2
console.log(n);//-2
console.log(p);//1

let d=1.5;
let D=2.5;

console.log(d++ + ++D);//5

let b=true;
b++;//(b=b+1)
console.log(b);//2



console.log('=================================================');

let i = 11;
		
		i = i++ + ++i;
		
		console.log(i);//24

        	let a=11, b=22, c;		
		c = a + b + a++ + b++ + ++a + ++b;
		console.log("a="+a);//13
		console.log("b="+b);//24
		console.log("c="+c);//103


let i=0;
let j = i++ - --i + ++i - i--;
console.log(i);//0
console.log(j);//0

let b = true;
b++;
console.log(b);//2

 let i=1, j=2, k=3;
let m = i-- - j-- - k--;
console.log("i="+i);//0
console.log("j="+j);//1
console.log("k="+k);//2
console.log("m="+m);//-4

let a=1, b=2; 
console.log(--b - ++a + ++b - --a);//0
console.log(a);//1
console.log(b);//2

let i=19, j=29, k=9;
let m = i-- - j-- - k--;
console.log("i="+i);//18
console.log("j="+j);//28
console.log("k="+k);//8
console.log(`value of m is ${m}`);//-19

let i = 11;
let j = --(i++);//SyntaxError: Invalid left-hand side expression in prefix operation 

let m = 0, n = 0;
let p = --m * --n * n-- * m--;//-1*-1*-1*-1
console.log(p);//1
console.log(m);//-2
console.log(n);//-2

let a=1;
a = a++ + ++a * --a - a--; 
console.log(a);//5
console.log(a);//5

let a = 11++;
console.log(a);//SyntaxError: Invalid left-hand side expression in postfix operation

let d = 1.5, D = 2.5;
console.log(d++ + ++D);//5
console.log(d);//2.5
console.log(D);//3.5