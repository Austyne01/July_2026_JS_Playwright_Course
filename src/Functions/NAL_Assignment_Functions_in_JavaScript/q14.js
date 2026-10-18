//Q14. Predict the output of both calls. Then explain in 2-3 lines: does JavaScript support functionoverloading like Java? 
// What actually happens when two functions have the same name?

function login() 
{console.log('login with no params');}

function login(username) 
{console.log('login with:', username);}

function login(username, password)
 {console.log('login with:', username, password);}

 login();
 login('naveen');

 //Function overloading doesn't work in javascript as compared to java because in the stack the methods follow the last in first out method where 
 //it will pick the method name written last rather than calling on the basis of number of arguments passed for the same method name