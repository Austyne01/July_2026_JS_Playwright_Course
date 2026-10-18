//class: category/blueprint/template for the objects:
//variables+methods
//object: a physical entity-variables(properties)+methods(actions)

export class Employee{
//class variables : global variables
name;
age;
salary;
isActive;

//constructor: It will help us to create object of the class 
// and help us initialize the class variable
//it will be called when we create the object of the class
//only one constructor is allowed
//constructor overloading is not allowed
//constructor cannot return anything

constructor(name,age,salary,isActive){
    //this.global=localStorage;
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.isActive=isActive;

}

//3. actions: methods
//without function keyword
//creating a variable inside a method is called local variable and here let keyword can be used to do the same

coding(){
    console.log(this.name,'is coding');
    let x=10;
    console.log(x);
}

reading(){
    console.log(this.name,'is reading');
    this.coding();
}

//if anonymous then we use the function keyword

running=function(){
console.log(this.name,'is running');
}

printing=()=>{
console.log(this.name,'is printing');

}

async billing(){
    return Promise.resolve(100);
}

static async getCompanyDetails() {
        console.log('Fetching company details...');
        return new Promise((resolve) => {
                resolve({ company: 'TechCorp', location: 'Mumbai' });

        });}

}

//Create the object of the class: using new keyword:

let e1=new Employee('Linda',30,16,true);
console.log(e1.name, e1.age, e1.isActive,e1.salary);




e1.coding();
e1.reading();
e1.running();
e1.printing();
await e1.billing();
 console.log('this is the result of async--');
let awc=await Employee.getCompanyDetails();
console.log(awc);
console.log('==========================');

let e2=new Employee('Tom',24);
console.log(e2.name, e2.age, e2.isActive,e2.salary);

e2.coding();
e2.reading();
e2.running();
e2.printing();
await e2.billing();
e2.salary=33.33;
e2.isActive=false;
console.log(e2.name, e2.age, e2.isActive,e2.salary);

//e2=undefined;
//console.log(e2.name);
