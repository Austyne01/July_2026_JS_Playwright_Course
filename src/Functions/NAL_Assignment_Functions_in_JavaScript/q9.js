//Q9. Write an arrow function printUser(userObj) that receives a user object and prints'<name> works in <city> and earns <salary>'.
//  Call it (a) by passing an existing object variableand (b) by passing the object literal directly inside the call.



let AustinData={
        name:'Austin',
        city:'Amsterdam',
        salary:50000
    }

    let printUser=(userObj)=>{
   console.log(`${userObj.name} , works in ${userObj.city}, and earns, ${userObj.salary}`)
}

printUser({name:'Naveen',city:'Seattle',salary:100000});

printUser(AustinData);