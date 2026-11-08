/*Q5 Create an object testCase with id, title, priority and status. Write code that checks if the
property executedBy exists in the object. If it does not exist, add it with your name. Then print
the object Hint: Look up the 'in' operator and hasOwnProperty().*/

let testCase={
    id:'TC_001',
    title:'loginTest',
    priority:'medium',
    status:'Pass/Fail'
}

//if('executedBy' in testCase){
if(testCase.hasOwnProperty('executedBy')){
    console.log('executedBy property exist');
}else{
    testCase.executedBy='Austin';
}

console.log(testCase);
