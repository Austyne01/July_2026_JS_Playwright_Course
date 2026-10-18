//nested objects: objects that contain other objects as properties. Nested objects can be useful for representing complex data structures, such as hierarchical data or data with multiple levels of detail.

let employee={
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

console.log(employee.address);
console.log(employee);
console.log(employee.name);

console.log(employee.address.city);
console.log(employee.address.zip);
console.log(employee.address.country);

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
//Iterating through nested objects using for in loop
for(let property in emp){
    
    if(property==='address'){
        for(let subproperty in emp[property]){
            console.log('subproperty', subproperty, '=', emp[property][subproperty]);
}}else {
    console.log(property, '=', emp[property]);}}