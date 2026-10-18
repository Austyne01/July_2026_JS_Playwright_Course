//Arrays: Collections of data that can be stored in a single variable. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
//data: similar data types: numbers, strings, booleans, objects, etc. Homogenous arrays: all elements are of the same data type. Heterogeneous arrays: elements can be of different data types.
//data : different data types: numbers, strings, booleans, objects, etc.  Heterogeneous arrays: elements can be of different data types.

let i=[10,20,30,40,50];
console.log('length of i =', i.length);//i is the object and length is the property of the object i. The length property of an array returns the number of elements in that array.
console.log('i[-1] =', i[-1]);
console.log('i[0] =', i[0]);
console.log('i[1] =', i[1]);
console.log('i[2] =', i[2]);
console.log('i[3] =', i[3]);
console.log('i[4] =', i[4]);
console.log('i[5] =', i[5]);
console.log(typeof i);

i[-1]=100;
i[-9]='Austin Automation';
i['age']=400;
console.log('i[-1] =', i[-1]);
console.log('length of i =', i.length);
console.log(i);
console.log(Object.getOwnPropertyNames(i));


i[10]=100;
console.log(i);
console.log('i[5] =', i[5]);
console.log('HI=', (i.length-1));
console.log('length of i =', i.length);
console.log(i);
i[5]=60;
console.log('i[5] =', i[5]);
console.log('length of i =', i.length);
console.log(i);
i[3]=i[0];
console.log('i[0] =', i[0]);
console.log('i[3] =', i[3]);
//Iteration: for loop, forEach loop, while loop, do while loop, for of loop, for in loop.

//Array of Strings: An array of strings is a collection of string values stored in a single variable. Each string value is an element of the array, and the elements are ordered and indexed starting from 0. Arrays of strings can be used to store lists of names, words, or any other textual data.

let products=['laptop','mobile','tablet','desktop','tablet'];
console.log('length of products =', products.length);
console.log(products);
products[4]='smartwatch';
products[0]='earphones';
console.log(products);

//Heterogenous array: An array that contains elements of different data types, such as numbers, strings, booleans, objects, etc. Heterogeneous arrays can be useful for storing related data that may not all be of the same type.
//emp data: string, number, boolean, bigInt

let empdata=['Sagigon', 23, true, 12345678901234567890n];
console.log('length of empdata =', empdata.length);
console.log(empdata);
empdata[1]=24;
empdata[2]=false;
console.log(empdata);

//iterate the array using for loop
var number=[100,200, 300,400,500];//0-4, length=5

//1.index based for loop
for(let i=0; i<number.length;i++){
    console.log('number[',i,'] =', number[i]);
}
console.log('=========================');
//reverse order
for(let i=number.length-1; i>=0;i--){
    console.log('number[',i,'] =', number[i]);
}

//modern advance for loops
//for..of loop: iterates over the values of an iterable object, such as an array, string, or map. It allows you to access each value in the iterable without needing to use an index or a counter variable. The for..of loop is often used when you want to perform an operation on each value in the iterable.
let fruits=['apple','banana','mango','grapes','kiwi'];
for(let fruit of fruits){
    console.log('fruit =', fruit);
    if(fruit==='mango'){
        console.log('Mango is my favorite fruit');
        break;
    }   
}   



var number=[100,200, 300,400,500];
for(let element of number){
    console.log('element =', element);
}

console.log('=========================');

//reverse order using for of loop
for(let element of number.reverse()){
    console.log('element =', element);
}
console.log('==========using counter variable===============');
//reverse order using the counter variable in the for of loop
let numbers=[100,200, 300,400,500];
let count=numbers.length-1;
for (let ele of numbers){
    ele=count;
    console.log(ele,'=', numbers[ele]);
    console.log('count =', count);
    console.log('element =', numbers[ele]);
    count--;
}


let empdata=['Sagigon', 23, true, 12345678901234567890n];
for(let data of empdata){
    console.log('data =', data);
    if(data===true){
        console.log('Increase the salary of the employee');
    }
}

//for..in loop: iterates over the keys of an object, such as an array or a plain object. It allows you to access each key in the object without needing to use an index or a counter variable. The for..in loop is often used when you want to perform an operation on each key in the object.
let actors=['Brad', 'Angelina', 'Tom', 'Johnny', 'Leonardo'];
for(let actor in actors){
    console.log(actor,'=', actors[actor]);
    
}

console.log('==========reverse in for in loop===============');
let counter=actors.length-1;

for(let actor in actors){
    actor=counter;
    console.log(actor,'=', actors[actor]);
    counter--;
}