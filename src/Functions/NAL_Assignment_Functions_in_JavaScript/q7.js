//Q7. Write the following arrow functions. Use the SHORTEST valid syntax for each (drop () andreturn where allowed).
//• square - takes one number, returns its square

let sqr=(num)=>num*num;
console.log(sqr(5));

 //toUpper - takes one string, returns it in upper case

 let upp=(name)=>name.toUpperCase();
 console.log(upp('austin automation'));

  //isAdult - takes age, returns true if age >= 18

  let isAdult=(age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
  }
 console.log(isAdult(21));


  //shortest way
let isAdultw = age => age >= 18
 console.log(isAdultw(22));

//sayHi - takes nothing, prints 'Hi!'

let hi=()=>console.log("Hi");
hi();

//average - takes three numbers, returns their average

let avg=(a,b,c)=>(a+b+c)/3;
console.log(avg(5,10,15));