/*Q2. Create an object loginPage that stores the locators of a login page: usernameField,
passwordField, loginButton, forgotPasswordLink. Store XPath or CSS strings as values. Print
each locator with a message like:  'Locator for login button is:
//button[@id="login"]*/

let loginPage={
    usernameField: '#username',
    passwordField: '#password',
loginButton: "//button[@id='login']",
forgotPasswordLink: "//a[text()='Forgot Password?']"    
}


for(let key in loginPage){
    console.log(`Locator for ${key} is ${loginPage[key]}`);
}
