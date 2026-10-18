//Q.3 Write a function getTestStatus(passed, total) that returns 'PASS' if all tests passed,
// 'PARTIAL' if some passed, and 'FAIL' if none passed. Test with (10,10), (6,10) and (0,10).

function getTestStatus(passed, total){
    if(passed===0){
        return 'Fail';
    }else if(passed===total){
        return 'Pass';
    }else if(passed>0 && passed<total){
        return 'Partial';
    }
    else{
        return 'Invalid Input';
    }
}

let res1=getTestStatus(15,10);
console.log(res1);

let res4=getTestStatus(5,10);
console.log(res4);

let res2=getTestStatus(10,10);
console.log(res2);

let res3=getTestStatus(0,10);
console.log(res3);