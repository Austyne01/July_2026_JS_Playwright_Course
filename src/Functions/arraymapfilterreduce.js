//1. map: transform every element of the given array
//returns: new array with the same length

let num=[1,2,3,4,5]

let test=num.map((e)=>{
    return e*2;
})

console.log(test);
console.log(num);

let sqrt=num.map((ele)=>{
    return ele*ele;
})

console.log(sqrt);

let emplist=['vidhi','Rahul','Austin', 'Pooja','Dhaval'];

let newemplist=emplist.map((e)=>{
    return e.toUpperCase();
})

console.log(newemplist);
console.log(emplist);

let newempcart=newemplist.map(names=>names+'_OLRSBatch');

console.log(newempcart);

//2. Filter:removes from the existing array on the basis of filteration
//return new array with the same length or length can be decreasing

let numbers=[10,20,30,45,60,90];

let grthan30=numbers.filter(e=>e<10);

console.log(grthan30);
console.log(numbers);

let even=numbers.filter(e=>e%2==0);
console.log(even);

let odd=numbers.filter(e=>e%2==1);
console.log(odd);


let stList=['Tom','Bruce auto','Brad auto', 'Oz','Nat'];
let newstList=stList.filter(e=>e.length>3);

console.log(newstList);

let stlistarray=stList.filter(e=>e.includes('auto'));

console.log(stlistarray.length);

let productData=['apple macbook','apple iph','samsung galaxy','canon','apple air']

//filter 1: starting with apple
//filter 2: where iph is present 
//op -> 'apple iphone'

let productData_U= productData.filter(e=>e.startsWith('apple')).filter(e=>e.includes('iph')).map(e=>e.replace('iph','iphone'));

console.log(productData_U);

let mynum=[10,20,30,40,50];

let total=mynum.reduce((sum,n)=>sum+n,0)
console.log(total);

let productData1=['apple macbook','apple iph','samsung galaxy','canon','apple air']

let finalVal=  productData1.reduce((result,e)=>result+e+' ','Robin: ')

console.log(finalVal);



//[100,20,30,45,60,70,80,89,21,34,55]
//filter 1: divisible by 5
//filter 2 : even
//map: double each number in the array
//reduce: total

let seq=[100,20,30,45,60,70,80,89,21,34,55];

let newseq=seq.filter(e=>e%5==0).filter(e=>e%2==0).map(e=>e*2);
let totalseq=newseq.reduce((sum,n)=>sum+n,0)

console.log(newseq);
console.log(totalseq);
