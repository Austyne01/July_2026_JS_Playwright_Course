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

