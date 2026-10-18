function startMachine(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
 console.log('1. Machine started')
        resolve(1);
        },1000)
       
    })
};

function boilWater(){
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            console.log('2. Water Boiled')
resolve(2);
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

startMachine().then((val)=>{
    console.log('start machine resolved with', val)
    return boilWater();})
.then((val)=>{
     console.log('boil water resolved with', val)
   return pourInCup();})
    .then((val)=>{
       console.log('pour in cup resolved with', val) 
        return serveCoffee();})
.then((val)=>{
    console.log('serve coffee resolved with', val) 
    console.log('your coffee is ready');})
.finally(()=>console.log('shut down the machine'));



startMachine().then(()=>boilWater())
.then(()=>pourInCup()).then(()=>serveCoffee())
.then(()=>console.log('your coffee is ready'))
.finally(()=>console.log('shut down the machine'));



console.log('===============================')

function getNumber(){
    console.log('trying to get a number');
    let flag=false;
    if(flag){
       return Promise.resolve(100);
    }else{
       return Promise.reject('number not available')
    }
}


getNumber().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('shut down the number system')
})