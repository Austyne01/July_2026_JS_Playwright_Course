//Q18. Write a function getCustomerInformation(username) that returns a user object for'pritam', 'pooja' and 'robert' (like the classroom example)
//  and returns null for unknown users.Then call it with 'tom' and print userData.name. What error do you get? Fix the calling code sothat it prints 'User not found' instead of crashing.
//hint :    Hint: Always check the returned value before using it: if (userData) { ... }


function getCustomerInformation(username){
    let cleanname=username.trim().toLowerCase();
if (cleanname==='pritam'){
    return{name:'Pritam',age:33,salary:50000,isActive:true};
}else if(cleanname==='pooja'){
    return{name:'Pooja',age:43,salary:60000,isActive:true};
}else if(cleanname==='robert'){
    return{name:'Robert',age:23,salary:70000,isActive:false};
}else{
    return null;
}
}
 let udata=getCustomerInformation(' PRItam ')
 //console.log(udata.name);//TypeError: Cannot read properties of null (reading 'name')
console.log(udata);
 console.log('=========================');
 //correct way
 if(udata){
   console.log(udata.name);
 }else{
console.log('User not found');
 }