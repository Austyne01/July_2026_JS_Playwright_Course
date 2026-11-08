/*Q8. Write a function updateCity(userObj, newCity) that changes the city inside the object
passed to it and does NOT return anything. Call it with a user object and print the object AFTER
the call. Explain in a comment why the city changed even though nothing was returned.*/


/*Answer: 'user' and 'userObj' point to the same object in memory.
When userObj.city is updated inside the function,
the original object is modified. The city changed even though nothing was returned because
objects are passed by reference in JavaScript.*/


let user={
name:'Austin',
city:'Thane'
}

console.log(user);

function updateCity(userObj, newCity){
userObj.city=newCity;
}

updateCity(user,'Mumbai');

console.log(user);

//same way trying to update a value
let age=30;

function updateage(age){
    age=50;
}
updateage(age);

console.log(age);

