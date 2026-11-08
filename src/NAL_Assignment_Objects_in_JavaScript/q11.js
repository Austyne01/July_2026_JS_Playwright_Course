/*Q.11 Create an array users that holds 4 user objects (name, age, salary, isActive). Using a
simple for loop, print the name of every user whose isActive value is true.*/


let users = [

    {
        name: 'Austin',
        age: 35,
        salary: 70000,
        isActive: true
    },

    {
        name: 'Robert',
        age: 30,
        salary: 50000,
        isActive: false
    },

    {
        name: 'Aarti',
        age: 34,
        salary: 65000,
        isActive: true
    },

    {
        name: 'Tom',
        age: 28,
        salary: 45000,
        isActive: false
    }

];


for(let i=0;i<users.length;i++){
    if(users[i].isActive){
        console.log(users[i].name);
    }
}

