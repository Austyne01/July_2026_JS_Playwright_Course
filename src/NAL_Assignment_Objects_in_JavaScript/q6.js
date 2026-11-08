/*Q6. Predict the output of the code below WITHOUT running it. Write your prediction, then run
and verify. Hint: After the assignment, how many objects are alive and how many references point to each one? What happens to
the original Naresh and Suresh objects?*/

let u1 = { name: 'Naresh', age: 40 };
let u2 = { name: 'Suresh', age: 44 };
let u3 = { name: 'Akash', age: 35 };
u1 = u2 = u3;
//console.log(u1.name, u1.age);
u3.age = 50;
console.log(u1.name, u1.age);//Akash , 50
console.log(u2.name, u2.age); //Akash, 50
console.log(u3.name, u3.age);//Akash, 50

//Answer : The original u1 and u2 references are now pointing to u3 and their own object reference 
// is delinked from those values in the heap memory and will be available for Garbage collection
