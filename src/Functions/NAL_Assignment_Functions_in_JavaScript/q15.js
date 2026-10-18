//Q15. A student wrote the code below and asked: 'why is it printing undefined?'. 
 // Predict theoutput, explain the reason in a comment, and fix the code so that the last line prints Named Expression Function Naveen

 let smallName = function thisIsMyBigName(param)
  {
    console.log('Named Expression Function', param);

  };

 let pop = smallName('Naveen');
 console.log(pop);

 //Since the function only prints the console log and doesnt return any value by itself therefore the undefined in the output
 //corrected code if we don't store and print then it should only return what we need
 console.log('=========================');

 smallName('Naveen');