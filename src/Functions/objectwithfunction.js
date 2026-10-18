let userObj={
    name:'Tony',
    age:63,
    isActive:true,
    coding(){
console.log(this.name,"is coding")
    },
    testing(){
console.log(this.name,"is testing")
this.coding();
    },

    data:function(){
console.log('anony calling ',this.name)
    },
    sata:()=>{
        console.log('arrow function calling',this.name)
    },
    anon:function(x,y){
        return x+y;
    }


}


console.log(userObj.age);
console.log(userObj.name);
userObj.coding();
userObj.testing();
userObj.data();
userObj.sata();
let r1=userObj.anon(100,200);
console.log(r1);


//Login page with its elements

let loginPage={
    username:'#username',
    password:'#password',
    loginbtn:'#loginbtn',

    doLogin(uname, passwd){
console.log('Enter',uname,'in',this.username);
console.log(`Enter ${passwd} in ${this.password}`);
    console.log('Click on', this.loginbtn);
    },
    doLogin1(){
        console.log('plain method')
    },
    store:(x,y)=>{
        return x+y;
    }

}

//loginPage.doLogin('Admin','admin123');

let r2=loginPage.store(377,1098);
console.log(r2);

console.log('looping through the object=================');
for (let key in loginPage) {
    if(typeof loginPage[key]==="function"){
        console.log(key,': ',loginPage[key].toString());
    }else{
console.log(key, ":", loginPage[key]);
    }
    
}

console.log('looping through the json string=================');
let JsonP=JSON.stringify(loginPage);

console.log(JsonP);