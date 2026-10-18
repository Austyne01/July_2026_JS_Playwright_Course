//Array functions - Mutator functions on the array
//[] Dynamic array
// li=0, array.length, hi=length-1

//1.push: add the element to the end of the array and returns the new length

let num=[4,8,76,98,54];

console.log(num.length);//5
console.log(num);

let names=['John', 'Jani','Janardan'];
console.log(names.length);//5
console.log(names);

num.push(100);
console.log(num.length);
console.log(num);

names.push('Nancy');

let n1=names.length;
console.log(n1);
console.log(names);

//2. pop method : remove the last element and return the same 
let mynum=[4,8,76,98,54];
console.log(mynum);
console.log(mynum.length);
let po=mynum.pop();
console.log(po);
console.log(mynum);
let mynames=['John', 'Jani','Janardan'];
let popped=mynames.pop();
console.log(popped);
console.log(mynames);

//3. Unshift method : add to the beginning of the array and return the new length
let newnum=[4,8,76,98,54,500,600];
let un=newnum.unshift(99);
console.log(un);
console.log(newnum);

//4. shift method: remove the first element and return the same 

let chnames=['John', 'Jani','Janardan','Brazzer','Hamster'];

let ch=chnames.shift();

console.log(ch)
console.log(chnames)

//5. Splice method: add, remove, replace
//[start index,delete count, index]
let cart=['imac', 'samsung', 'iphone','macbook'];

console.log(cart);
cart.splice(0,2,'canon','prestige','hamilton');

console.log(cart);

console.log('============================')

let deletedItems=cart.splice(1,3,'banon');
console.log(cart);
console.log(deletedItems);

cart.splice(2)
console.log(cart);

cart.splice(0,cart.length,'keyboard');
console.log(cart);


//6. Slice method 

let cartey=['imac', 'samsung', 'iphone','macbook','lenovo'];

let newcart=cartey.slice(1);

console.log(newcart);
console.log(cartey)

let negcart= cartey.slice(-3,-1);
console.log(negcart);

//7. reverse

let partey=['imac', 'samsung', 'iphone','macbook','lenovo'];
partey.reverse();
console.log(partey);

//8. indexof:

let sartey=['imac', 'samsung', 'iphone','macbook','lenovo'];

let i=sartey.indexOf('nAveen');

console.log(i);

let repeatey=['jijo','imac', 'samsung', 'imac','macbook','lenovo','imac'];

let k=repeatey.indexOf('imac');
console.log(k);

let p=repeatey.indexOf('imac',k+1);
console.log(p);

let t=repeatey.indexOf('imac',p+1);
console.log(t);

//9. Includes

let products=['notebook','pen','pencil','paper'];
console.log(products.includes('harmonica'));

//10. Joins

let lang=['Java','Javascript','Typescript'];
let newlang=lang.join('-');
console.log(newlang);

//11. toString
let neunum=[4,8,76 ,98 , 54 ,500,600];

let nm=neunum.toString();

console.log(nm);
console.log(nm.trim());

//12.at - element at given index, it supports negative index 

let rest=[10,20,30,40,50];
console.log(rest.at(4));
console.log(rest.at(5));
console.log(rest.at(-1));
console.log(rest.at(-5));
console.log(rest.at[-5]);


//13. foreach() function

let product=['notebook','pen','pencil','paper'];

/*product.forEach(ele=>{
    console.log(ele);
})*/

product.forEach(ele=>{
    console.log(ele.toUpperCase(), ele.length);
})

let numi=[1,2,3,4,5];

numi.forEach(n=>console.log(n));

numi.forEach(n=>console.log(n*n));