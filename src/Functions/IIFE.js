//IIFE - Immediately invoked function expression
//anonymous - function with no name - enclosed inside ()
//immediate caller

//IIFE anonymous

(function(){
    console.log('Anonymous IIFE no param')
})();

//IIFE anonymous with param
(function(user){
    console.log('Anonymous IIFE no param',user)
})('Austin');

//IIFE arrow function no param

(()=>{
   console.log('arrow IIFE no param'); 
})();

//IIFE arrow with param
(username=>{
   console.log('arrow IIFE with param',username); 
})(true);

//Return from IIFE

let ret=(function(x,y){
    return x+y;
})(20,30);
console.log(ret);

((username, password)=>{
   console.log('arrow IIFE  param',username, password); 
})('Admin','pass123');

//launch the browser using iife
/**
 * 
 * @param {string} browserName
 * @returns 
 */
let islaunched=((browserName)=>{
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
            case 'firefox':
            console.log('chrome is launched');
            return true;
            case 'safari':
            console.log('chrome is launched');
            return true;
    
        default:
            console.log('invalid browser pls pass the correct browser');
            return false;
    }
})('chrome');

console.log(islaunched);
if(islaunched){
    console.log('enter the url');
}



let retu=((x,y)=>x+y)(10,20);
console.log(retu);