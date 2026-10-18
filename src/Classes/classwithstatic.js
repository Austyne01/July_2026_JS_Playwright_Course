//static in class

export class Student{
name;
age;
static trainerName='Naveen Automation Labs';

constructor(name,age){
this.name=name;
this.age=age;
}

//action: methods
coding(){
    console.log(this.name,'is coding');
}

reading(){
    console.log(this.name,'is reading');
}

//static method

static learningPlaywright(){
    console.log('learning playwright');
}
static async getCompanyDetails() {
        console.log('Fetching company details...');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ company: 'TechCorp', location: 'Mumbai' });
            }, 2000);

        });}
    
}
//create the object

let s1=new Student('Saumil',10);
let s2=new Student('Bhakti',11);

(async () => {
    let aw = await Student.getCompanyDetails();
    console.log('this is the result of async--');
    console.log(aw);
})();
console.log('==========================');
console.log(s1.name,s1.age,Student.trainerName);

s1.coding();
s1.reading();
Student.learningPlaywright();
//console.log(Student.name);
console.log(Student.age);//undefined


//write a async static method and call it using the class name

