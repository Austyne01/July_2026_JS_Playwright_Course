//Q11. The function below has the default parameter FIRST. 
// Predict what billing(100) prints,explain why, and then rewrite the function so that it works as expected.

function billing(discount = 10, total) 
{
    console.log(total - discount);
}

billing(100);//NaN -> since discount is taken as 100 here as the first value the second value is indefinite hence indefinite-100 is also indefinite which is NaN

//correct way of writing this function
function billing(total,discount = 10) 
{
    console.log(total - discount);
}

billing(100);//100-10=90