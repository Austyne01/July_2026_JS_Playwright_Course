let user={
    name:'Jacqueline',
    age:26,
    isActive:true,
    salary:10
}

let userDetails=function (userObj){
    console.log(userObj.age,userObj.name)
    return userObj;
}

let getUserInfo=userDetails(user);

console.log(getUserInfo);

let user1 = { name: "Jacqueline", age: 26 };

function updateUser(u) {
  u.age = 30; // mutation
  console.log("Inside function:", u);
}

updateUser(user1);
console.log("Outside function:", user1);

let x=5,y=10;

function mutate(a,b){
    a=a+5;
    b=b+5;
    console.log('Inside function', a,b);
}

mutate(x,y);
console.log('outside function',x, y);