let user={
    name:'Neelam',
    age:32,
    salary:24,
    city:'Bangalore'
}

let{name,salary,city}=user;

console.log(name,salary,city);

console.log("=============================")

//rename the variables using :

let{name :uname,salary: mysalary,city: mycity}=user;

console.log(uname,mysalary,mycity);

//destructuring the object inside a function

let person={
    name:'Pradeep',
    age:34,
    salary:26,
    city:'Navi Mumbai',
    isActive:true
}

function getPersonDetails({name,salary,isActive}){
console.log(name,isActive,salary);
}

getPersonDetails(person);


//destructuring a nested object

let customer={
    hname:'Pranit',
    age:32,
    salary:28,
    isActive:true,
    address:{
    scity:'Navi Mumbai',
    unit:101,
    location:{
        lat:101.21,
        long:35.25
    }
    }
}

let {hname, isActive,address:{scity,unit,location:{lat, long}}}=customer;
console.log(hname,isActive,unit,scity, lat, long);


//destructuring an array

const browsers=['chrome','firefox','edge'];

//normal access other way without destructuring

/**const browser1=Browsers[0];
const browser2=Browsers[1];
const browser3=Browsers[2];

console.log(browser1, browser2, browser3);*/


const [browser1, browser2, browser3]=browsers;

console.log(browser1,browser2,browser3);

const[first,,third]=browsers;

console.log(first, third);


//object destructuring

let employee={name:'Austin',role:'QA', experience:10};

//normal access without destructure
console.log(employee.name,employee.role,employee.experience);

//with object destructuring

let {name,experience}=employee;
console.log(name,experience);

