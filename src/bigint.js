let num=100;

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

let mynum=9007199254740993+100;
console.log(mynum);

//Big Int

let myBigNum=9007199254740993n;
console.log(myBigNum);
console.log(typeof myBigNum);//bigint

console.log(myBigNum+100n);
console.log(10%3);

//console.log(myBigNum+10.55n);//typeerror:Cannot mix BigInt and other types,

console.log(90n/0n);//Division by zero
console.log(90n/10n);
console.log(typeof Infinity);