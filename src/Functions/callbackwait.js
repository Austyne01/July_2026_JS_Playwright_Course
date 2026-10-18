//calling a function with passing a function but with wait timeout for example 5000 ms

        setTimeout(()=>{
            console.log('Hello world');
        },5000);


        setTimeout(()=>{
            console.log('Hello world');
        },5000);

        console.log('written after post set timeout')

        

        //callback function live example with timeout

        function getDetails(callback){
            console.log('Connecting to DB for user details')
            setTimeout(callback,4000);
        }


        getDetails(()=>{
console.log('fetching user details...');
        });


        //creating a object in a function callback wait

        function fetchdetails(callback){
console.log('fetch iser details from db/server');
setTimeout(()=>{
    let user={
        name:'Sawant',
        age:44,
        isActive:true
    };
    callback(user);
},5000)
 }

 fetchdetails((user)=>{
    console.log('user data received');
    console.log(user);
    console.log(user.name,user.age);

 });


 function fetchRecord(callback){
    console.log('Findind details of the suspect ...')
    setTimeout(()=>{
        let suspect={
        name:'Shinde',
        age:46,
        isActive:false
    };
    callback(suspect);},5000)
 }


 fetchRecord((suspect)=>{
    console.log('suspect details found');
    for (let e in suspect){
        console.log(e,suspect[e]);
    }
    console.log(suspect.name,suspect.age);
 })