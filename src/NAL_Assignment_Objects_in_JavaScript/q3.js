/*3. Create an object browserConfig with browserName, headless (boolean), timeout (number)
and baseUrl. Print: 'Launching chrome in headless mode with timeout 30000 on
https://...' using the values from the object.*/

const browserConfig={
browserName:'chrome',
headless:true,
timeout:30000,
baseUrl:'http://www.facebook.com'
}


console.log(`Launching ${browserConfig.browserName} in headless ${browserConfig.headless} mode with timeout ${browserConfig.timeout} on ${browserConfig.baseUrl}`);
