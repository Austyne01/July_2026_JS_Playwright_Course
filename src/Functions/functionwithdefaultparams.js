//function with default params

function calculate(bill, discount=5){
    total=bill-discount;
    console.log(total)
}

calculate(100);


function calculateprice(total, tax=0.05, discount=0){
    return total + (total*tax)-discount;

}

let finalamount=calculateprice(100);

console.log(finalamount);

//problem with function with default parameter 

function billing(discount=10, total) {
    console.log(total-discount);
}

billing(100,900);