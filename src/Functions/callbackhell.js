//callback hell


function startMachine(callback){
    setTimeout(()=>{
        console.log('machine started');
        callback();
    },2000);
};


function boilWater(callback){
    setTimeout(()=>{
        console.log('Boil Water');
        callback();
    },3000);
};

function addCoffeePowder(callback){
    setTimeout(()=>{
        console.log('Water boiling..')
        callback();
    },2000)
}

function pourInCup(callback){
     setTimeout(()=>{
        console.log('Pouring coffee..')
        callback();
    },1000)
}

function serveCoffee(callback){
     setTimeout(()=>{
        console.log('Serving coffee..')
        callback();
    },1000)
}

startMachine(()=>{
    boilWater(()=>{
        addCoffeePowder(()=>{
            pourInCup(()=>{
              serveCoffee(()=>{
                console.log('you coffee is ready enjoy it');
              })
            })
        })
    })
})