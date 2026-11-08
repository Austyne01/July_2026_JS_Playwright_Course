/*Q4. Start with the object below and perform the operations in order. Print the object after every
step.
let employee = {
name: 'Robert',
age: 30,
salary: 34.55,
isActive: true
};
• Update salary to 55.75
• Add a new property email = 'robert@nal.com'
• Add a new property skills = ['JavaScript', 'Playwright']
• Delete the isActive property
• Print the total number of properties left in the object*/

let employee = {
name: 'Robert',
age: 30,
salary: 34.55,
isActive: true
};

employee.salary=55.75;

console.log(employee);

employee.email='robert@nal.com';

console.log(employee);

employee.skills = ['JavaScript', 'Playwright'];

console.log(employee);

delete employee.isActive;

console.log(employee);

console.log('=============================')


console.log(Object.keys(employee));

console.log(Object.keys(employee).length);