//Promise:
//1. Pending
//2. resolved --> fulfillment --> may/may not return the resource(data/value)
//3. rejected --> reason (error reason)

//Pizza -> Pending -> resolved(delivered)-> reject(not available)

let pizaPromise=new Promise((resolve, reject)=>{
    let success=false;
    if (success){
        resolve('pizza delivered');
    }else{
        reject('person not available');
    }
});


//calling a promise using the reference name
//promise->resolved--> then()
//promise-> rejected --> catch()
//finally() -->

pizaPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('closing the app');
});

let pizzaPromise=new Promise((resolve, reject)=>{
    let success=false;
    if (success){
        resolve('pizza delivered');
    }else{
        reject('person not available');
    }
});


    pizzaPromise.catch((error)=>{
    console.log(error);});


    function getUser(userid){
        return new Promise((resolve, reject) => {
            console.log('fetching user details');
            setTimeout(()=>{
                if (userid<=0){
                    //reject('invalid user id ..', userid);
                    //reject({msg:'invalid user id',id:userid})
                    reject(`invalid user id, ${userid}`)
                }else{
                    let user={
                        name:'Natasha',
                        age:40,
                        isActive:true};
                        resolve(user);

                    }
                },4000);
            })
        }
    

        getUser(0).then((userinfo)=>{
            console.log(userinfo)
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            console.log('close the db connection..')
        });

        //function with only resolve or reject 

        function getNumber(number){
            return Promise.resolve(number)
        }

         /**getNumber(100).catch((result)=>{
console.log(result);
        });*/

        getNumber(100).then((result)=>{
console.log(result);
        });

        function getTrainerName(){
            return Promise.resolve('Naveen');
        }

        getTrainerName().then((name)=>{
console.log(name);
        })

        function getBrowserError(){
            return Promise.reject('500 Internal server error')
        }

        getBrowserError().catch((error)=>{
console.log(error)
        })

        //new Promise with only resolve or reject

        function goPicnic(){
            return new Promise((resolve)=>{
                resolve('25th Oct');
            })
        }

        goPicnic().then((date)=>{
console.log(date);
        })

        function ageGirl(age){
            return new Promise((reject)=>{
                reject(`I don't want this age ${age}`);
            })

        }

        ageGirl(35).then((myanswer)=>{
            console.log(myanswer);
        })


        function ageGirl(age){
            return new Promise((resolve, reject) => {
                console.log('checking girls age ');
                setTimeout(()=>{
                    if (age>=30){
                        reject('too old for me');
                    }else{
                        resolve('this is perfect');
                    }
                },4000);
            })};


            ageGirl(29.5).then((selection)=>{
                console.log(selection)
            }).catch((reason)=>{
                console.log(reason);
            }).finally(()=>{
                console.log('lets move ahead now');
            })

                


