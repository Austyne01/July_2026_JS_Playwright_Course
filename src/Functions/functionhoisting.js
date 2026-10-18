
//variables hoisting

console.log(x);

var x=10;


//function hoisting

create();

function create(){
console.log('create the element');
}


//named expression function hoisting

uData('suma');

let uData=function getUserDetailsFromDashBoard(username){
    console.log('getting user details for '+username);
    return 100;
}

let myData=uData('mihir');

console.log(myData);