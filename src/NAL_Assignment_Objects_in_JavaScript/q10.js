/*Q10. Create an object testSuite with suiteName and an array property testCases that holds
three test case objects (each with id, title and status). Print the title of the second test case and
the total number of test cases.Hint: testSuite.testCases[1].title*/

let testSuite={
    suiteName:'RegressionSuite',
    testCases:[
        {id:'TC01',title:'Login Test',status:'Pass'},
        {id:'TC02', title:'Search Test', status:'Fail'},
         {id:'TC03', title:'Add to Cart', status:'Fail'}

    ]
}

console.log("Title of second test case,", testSuite.testCases[1].title);

console.log("Total no of test cases,", testSuite.testCases.length);


