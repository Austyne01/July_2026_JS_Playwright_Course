let user={
    name: 'Megan',
    age: 32,
    salary: 12.44,
    isActive: true,
    city: 'Pune',
    country:'Pune'
};

//update the user property
user.salary=15.5;
console.log(user);

//delete the user property etirely
delete user.salary;
console.log(user);

//add/create a new user property
user.email='meg@gmail.com'
console.log(user);


