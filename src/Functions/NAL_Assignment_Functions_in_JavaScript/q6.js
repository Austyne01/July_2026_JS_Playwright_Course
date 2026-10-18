//Part B - Functional Expressions , Anonymous and Arrow Functions
 //Q6. Convert the following normal function into (a) an anonymous function expression and (b) anarrow function. All three versions must give the same output.
 
 function getFullName(firstName, lastName) 
 {return firstName + ' ' + lastName;

 }
 console.log(getFullName('Naveen', 'Khunteta'));


 let rt=getFullName('Austin','Monteiro');
 console.log(rt);

//anonymous function
let rt1 = function(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(rt1('Naveen', 'Khunteta'));

//arrow function
let arr = (firstName, lastName) => firstName + ' ' + lastName;
console.log(arr('Naveen', 'Khunteta'));