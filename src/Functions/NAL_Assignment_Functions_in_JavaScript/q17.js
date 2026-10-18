//Part E
//Q17. The classroom function chain (login -> search -> addToCart -> logout -> login ...) neverstops. 
// Rewrite the same chain so that it runs exactly ONCE in the order login, search,addToCart, logout, and then prints 'Test completed'. Do NOT call login() from inside logout().


function login(){
    console.log('login to app');
    search();
}

function search(){
    console.log('search the product');
    addToCart();
}

function addToCart(){
    console.log('add product to the cart');
    logout();
}
function logout(){
    console.log('logout from the app');
    console.log('Test Completed');
}

login();
