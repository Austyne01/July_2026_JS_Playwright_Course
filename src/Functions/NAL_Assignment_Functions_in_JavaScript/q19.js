//Q19. Build a mini test-runner using only functions:• setup(browser) - prints 'Setup done for <browser>' and returns true• runTest(testName, shouldPass) 
 // - prints the test name and returns 'PASS' or 'FAIL' based onshouldPass• teardown() - prints 'Browser closed'• execute(browser, tests) 
 // - accepts a browser name and an array of {name, shouldPass} objects,calls setup once, runTest for every object using a loop, counts PASS/FAIL, calls teardown, and finallyreturns a summary object { total, passed, failed }


 function setup(browser){
    console.log(`setup done for ${browser}`);
    return true;
 }

function runTest(testName, shouldPass){
    console.log('running',testName);
    if(shouldPass){
        return 'PASS';
    }else{
        return 'FAIL';
    }
}

function teardown(){
    console.log('browser closed');
}

(browser,tests)=>{

}