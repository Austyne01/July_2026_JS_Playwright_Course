//encapsulation: hiding the class properties/methods using private and giving access via public methods
class Employee{
    name; //public
    age;//public 
    #salary;//private use # in the beginning 

constructor(name,age,salary){
    this.name=name;
    this.age=age;
    this.#salary=salary;

}
//methods:
//public setter

setSalary(salary){
    this.#salary=salary;
}
//public getter
getSalary(salary){
return this.#salary;
}

};

//create the object:
let e1=new Employee('Tom',30,12.33);
console.log(e1.name,e1.age);
console.log(e1.getSalary());

e1.setSalary(20.50);
console.log(e1.name,e1.age,e1.getSalary());

console.log('directly changed without setter');
console.log(e1.name,e1.age,e1.getSalary());
e1.name='Tom Dick';
e1.age=34;
console.log(e1.name,e1.age,e1.getSalary());


// method encapsulation

class Browser{

    launchbrowser(){

        console.log('launching browser ....')
        this.#checkOSCompatible();
        this.#checkRAMSize();
        this.#checkUpgrade();
    }

#checkOSCompatible(){
    console.log('check od compatible..')
}
#checkRAMSize(){
    console.log('check RAM size..')
}

#checkUpgrade(){
    console.log('check upgrade..')
}

}

let obj=new Browser();
obj.launchbrowser();
