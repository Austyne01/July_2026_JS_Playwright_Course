//Q8. Named function expression - predict the output of each line. Which line(s) will throw an errorand why?

let getData = function getUserDetailsFromDashboard(username)
 {console.log('getting details for:', username);
    return 200;
};

let d1 = getData('Surbhi');
console.log(d1);//getting details for: Surbhi 200


let d2 = getUserDetailsFromDashboard('Naveen');
console.log(d2);//error getUserDetailsFromDashboard is not defined

