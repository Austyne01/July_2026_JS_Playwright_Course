//Objects- non primitive -> stored inside the heap memory - with reference
//collection of related data -key:value pair
let user={
    name: 'Megan',
    age: 32,
    salary: 12.44,
    isActive: true,
    city: 'Pune',
    name:'Wendy',
    country:'Pune'
};

for(let property in user){
    //console.log(property);
    console.log(property, '=',user[property]);
}

console.log(user);
console.log(user.name);
console.log(user.isActive);
console.log(user.salary);
console.log(user.country);
console.log(user['isActive']);
console.log(typeof user);//object
//user=undefined;
user=null;
console.log(user);
console.log(user.name);


console.log('==========================')
//for in loop to iterate the object



{
    name: 'Perfor'
}