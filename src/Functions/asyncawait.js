async function print(){
    console.log('hello print')
}

print();

async function getNumber(num){
    return num;
}

let g1=await getNumber(50)
console.log(g1)

//let t1=getNumber(100);
//console.log(t1);

getNumber(100).then((t1)=>console.log(t1))

async function printNumber(){
    return 100;
}

//calling async function using await
let p1=await printNumber();
console.log(p1);


function testing(){
    return 400;
}

let t2= testing();
console.log(t2);


function getUserObj(){
    return new Promise((resolve)=>{
        console.log('fetching user object ...')
        setTimeout(()=>{
            let user={name: 'Borna', age:82}
            resolve(user)
        },4000)
    })
}


let borna=await getUserObj();
console.log(borna);
console.log(borna.name, borna.age);



//async await function with an object

function getUserObj(){
    return new Promise((resolve)=>{
        console.log('fetching user object ...')
        setTimeout(()=>{
            resolve({name: 'Lorna', age:82})
        },4000)
    })
}

/**getUserObj().then((user)=>{
    console.log(user);
    console.log(user.name,user.age);
})*/

let lorna=await getUserObj();
console.log(lorna);
console.log(lorna.name, lorna.age);


async function getTrainerName(){
    return 'Naveen';
}

let n=await getTrainerName();
console.log(n);


function getError(){
    return Promise.reject('500 internal server error');
}

let e1=await getError();
console.log(e1);

//async with function - it always return a promise
//await with the steps in the async

function startMachine(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
 console.log('1. Machine started')
        resolve(true);
        },1000)
       
    })
};

function boilWater(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            console.log('2. Water Boiled')
reject(2);
        },2000)
            
        
    })
};

function pourInCup(){
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            console.log('3. Pour in the cup')
resolve(3);
        },2000)
            
        
    })
};

function serveCoffee(){
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            console.log('4. Serve the coffee')
resolve(4);
        },2000)
            
        
    })
};

function displayMsg(){
    console.log('your coffee is ready..enjoy it');
}

//user facing function
async function makeCoffee(){
    try{

    
    let flag=await startMachine();
    console.log(flag);
    if (flag){
let b=await boilWater();
console.log(b);
    let c=await pourInCup();
    console.log(c);
    let d=await serveCoffee();
     console.log(d);
     displayMsg();}else{
        console.log('some error encountered')
     }

    }
    catch(error){
        console.log('close the machine..',error)
    }
    finally {
        console.log('power off ')
    }
    
}

//calling the make coffee function

await makeCoffee();


//callbackhell ---> promises ---> async/await
//1. If a function is written with async it always returns a promise -> call it using await
//2. If a fnction retuns a promise (resolve,reject) it is async function -> call it using await
//3. We should not write await without async function
//4. async function - its not mandatory to have await steps --> await+non-await steps--> calling using await --> will always return a promise
//5. If in a function you have await steps then that function should always be async

