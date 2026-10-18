//Q16. Predict the output, then explain what happens with the extra argument 100 and the 
 // missing return.

 function getFinalSalary(ctc, sharePrice, foodCoupon) {
    let finalSalary = ctc + sharePrice;
    console.log(finalSalary);

}
let s = getFinalSalary(10000, 1000, 100);
console.log(s);//110000 undefined
console.log(typeof getFinalSalary); //function

console.log('=======================')
getFinalSalary(900,100,500);//1000

//Nothing happens with the extra 100 its just a code redundancy which should be avoided for efficiency 
//Also the unused value later or get cleared fro the memory by the GC process(garbage collector)
