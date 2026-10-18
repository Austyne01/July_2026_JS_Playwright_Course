//Q.5 Write a function getEnvDetails() that returns an array containing: environment name,URL, port number and a boolean isProd. 
 // Call it, store the result, print the array and its length,and print only the URL from the array.

 function getEnvDetails(){
    let arr=['Prod','www.yahoo.com',8080,true];
return arr;
 }


 let arrdis=getEnvDetails();
 console.log(arrdis);
 console.log(arrdis.length);
 console.log(arrdis[1]);