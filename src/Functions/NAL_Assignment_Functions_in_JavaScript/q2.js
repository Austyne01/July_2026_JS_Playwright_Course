//Q2. Write a function isEven(num) that returns true if the number is even, otherwise false.
//  Call itwith 10, 7 and 0 and print the results. Then use the returned value inside an if/else to print 'Evennumber' or 'Odd number'

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

let nums=[10,7,0];

nums.forEach(n=>{
    let result=isEven(n);
    if(result){
        console.log(`${n} is even number , ${result}`)
    }else{
        console.log(`${n} is odd number, ${result}`)
    }
});