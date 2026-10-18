//Named Expression Function
//Simple function

/**
 * @param{string}name
 */
function test(name){
    console.log(name);
}

test('austin');

//named expression function

let uData=function getUserDetailsFromDashBoard(username){
    console.log('getting user details for '+username);
    return 100;
}

let Data=uData('austin');
console.log(Data)

