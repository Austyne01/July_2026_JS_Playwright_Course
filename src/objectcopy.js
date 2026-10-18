//create a copy of the object
//1. shallow copy: using spread operator

let user={
    name: 'Austin',
    age: 37,
    salary: 17.44,
    isActive: true,
    city: 'Mumbai',
    
    country:'Indian'
};

let myuser={...user};

console.log(user);
console.log(myuser);



let emp={
    name:'Megan',
    age:32,
    isActive:true,
    phone:'123-456-7890',
    salary: 50000,
    address:{
        street:'123 Main St',
        city:'New York',
        zip:'10001',
        country:'USA'
    }
};

let myemp={...emp};

console.log(emp);
console.log(myemp);

console.log('===========================');

myemp.address.city='Los Angeles';
console.log(emp);
console.log(myemp);

console.log('===========================');
emp.salary=60000;
console.log(emp);
console.log(myemp);

//dont use the shallow copy for nested objects, use deep copy instead
//depp copy: modern way: using structuredClone() method


let customer1={
    name:'MegaDivyan',
    age:32,
    isActive:true,
    phone:'123-456-7890',
    salary: 50000,
    address:{
        street:'123 Main St',
        city:'New York',
        zip:'10001',
        country:'USA'
    }
};


let customer2=structuredClone(customer1);

console.log(customer1);
console.log(customer2);

console.log('===========================');

customer2.address.city='Los Angeles';
console.log(customer1);
console.log(customer2);

console.log('===========================');
customer1.salary=60000;
console.log(customer1);
console.log(customer2);
