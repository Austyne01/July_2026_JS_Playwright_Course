//function overloading in java but duplicate function in js

function login(username, password){
    console.log('login to app ', username, password);
}
    function login(username){
    console.log('login with usernme', username);
}

function login(){
    console.log('plain login')
}

//calling
login();




