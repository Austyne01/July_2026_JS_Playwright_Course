//function with a name

function test(name){
    console.log(`Hello ${name}`)
}

test('austin')

//Anonymous function : a function without a name
//stored in a named expression
let print=function (name){
    console.log(`Hello ${name}`)
}

print('Naveen')

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns
 */

let summation=function (a,b){
    sum=a+b;
    return sum;
}

let printing=summation(18,19);

console.log(printing);


/**
 * @param{string} browserName
 * 
 */

let checkBrowser=function(browserName){
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('open chrome browser url');
            return true;

            case 'safari':
            console.log('open safari browser url');
            return true;
    
            case 'firefox':
            console.log('open firefox browser url');
            return true;
    
            case 'edge':
            console.log('open edge browser url');
            return true;
    
    
        default:
            console.log('invalid browsername entered...', browserName);
            return false;
    }

}

let flag=checkBrowser('eDge');
console.log(flag);