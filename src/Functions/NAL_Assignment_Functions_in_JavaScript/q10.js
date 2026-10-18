//Part C Default Parameters
//Q10. Predict the output of every call below WITHOUT running the code. Then run and verify.

function calculate(bill, discount = 50) 
{console.log(bill - discount);

}
calculate(1000);//950
calculate(2000, 100);//1900
calculate(100, 0);//100
calculate(500, undefined);//450 - undefined is ignored and default value 50 is taken into calculation
calculate(500, null);//500 - null value is calculated as 0