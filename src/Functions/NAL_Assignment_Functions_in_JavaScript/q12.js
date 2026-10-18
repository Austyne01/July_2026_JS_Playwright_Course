//Q12. Write a function createTestUser(name, role = 'tester', isActive = true,country = 'India') that returns an object built from the parameters. 
// Call it four times: with 1,2, 3 and 4 arguments. Print each returned object.

function createTestUser(namee, role='tester' , isActive=true,country='India'){
    return {namee:namee,role : role, isActive : isActive,country : country}
    
}

let a1=createTestUser('Joy')
console.log(a1);

console.log(createTestUser('Merlin','developer'));

let a3=createTestUser('Akshay','contractor',false,'Canada');

console.log(a3);
