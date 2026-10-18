//Part D
//Q13. Predict the output. Which call works, which one fails, and what is the exact error message?

create();//function declaration hoisted with the function body o/p-> create the element
function create() 
{console.log('create the element');
}



click();//hoisting - call before declaration error ->Cannot access 'click' before initialization
let click = function () 
{console.log('click on the element');

};