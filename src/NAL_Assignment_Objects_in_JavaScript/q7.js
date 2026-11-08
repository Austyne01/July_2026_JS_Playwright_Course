/*Q7. Predict the output of the code below. Explain in one line why the two console.log statements
print what they print.*/
let cart = { items: 2, total: 500 };
let copy = cart;
copy.items = 5;
console.log(cart.items);//5
console.log(copy === cart);//true

/*Answer : Sice copy object is also pointing to cart so the changes made in copy or cart affect the same object and hence 
cart.items changes to 5 and so is the copy===cart returns true.*/