//loops

//1. While loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

    //decremental operator
let k=10;
while(k>=1){
    console.log(k);
    k--;
}

let l=1;
while (l<=10){
    console.log(l);
    if(l===5){
        console.log('5 is found');
        break;//entire while loop will break if l is equal to 5
            }
    l++;
}
console.log('out of while loop');



//2. For loop
//for(initialization; condition; increment/decrement){
//print logic
//}

for(let j=1;j<=10;j++){
    console.log(j);
   // j++;
}

//nterview question
for(;;){//by default it will start taking true and it will run infinite times
    console.log('infinite loop');
break;
}

//nested if inside for loop
let m=1;
for(m=1;m<=100;m++){
    console.log(m);
    if(m%5==0){    
        console.log('AUtomation is found');
        break;
    }
    if(m%2==0){ 
        console.log('Austin is a automation champion');
    //break;
    }}
    console.log('out of for loop');



    //Use cases of the while loop
    // when number of iterations are not fixed we can use while loop and when number of iterations are fixed we can use for loop
    //1. webtable pagination
    //2.Calendar handling
    //3.carousal handling: (arrow scroll products)  
    //4. element is visible on the page or not: 0 5 10 15 20 50
    //5. page loading time: 0 5 10 15 20 50
    //6. infinite scrolling: insta, linkedin, facebook, twitter, youtube
    //7. dynamic element handling: (dynamic xpath, dynamic id, dynamic class, dynamic dropdown)


    //Use cases of for loop
    //1.when number of iterations are fixed we can use for loop 
    //2. month dropdown handling: jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
    //3. Array list:
    //4.footer links handling: about us, contact us, careers, privacy policy, terms and conditions
    //5. STatic webtable handling: (row, column, cell)

    //Do-while loop
    //1. Nested loops
    //2. Time complexity
    
let p=1;
do{
     
    console.log(p);
    p++;
    //break
   
}while(p<=10);

//switch inside for loop
for(let q=1;q<=3;q++){
    switch(q){
        case 1:
            console.log('case 1 is executed');
            break;
        case 2:
            console.log('case 2 is executed');
            break;
        case 3:
            console.log('case 3 is executed');
            break;
            default:
            console.log('default case is executed');
            break;  

    }
    break;
}

//naveens example
let browser='chrome';
for (let n = 1; n <= 5; n++) {
    switch (browser) {
        case 'chrome':
            console.log('open chrome');
            break;
        case 'firefox':
            console.log('open ff');
            break;
default:
            break;
    }
    break;
}

//switch inside while loop
let count=3;    
while(count<=3){
    switch(count){
        case 1:
            console.log('case 1 is executed');
            break;  
            case 2:
            console.log('case 2 is executed');
            break;
            case 3:
            console.log('case 3 is executed');
            break;  
            
            default:
            console.log('default case is executed');
            break;  
        }
    count++;
    console.log('out of switch loop');
    if (count===2){
        break;
    }
    }

console.log('out of while loop');

//switch inside do while loop   
let number = 0;
while (number < 3) {
  switch (number) {
    case 0:
      console.log("case 0");
      break; // exits switch, loop continues
    case 1:
      console.log("case 1");
      break;
      case 2:
        console.log("case 2");
        break;
        case 3:
        console.log("case 3");
        break;
    default:
      console.log("default");
      break;
  }

  // increment happens after switch
  number++;

  // break out of while loop entirely
  if (number === 3) {
    break;
  }
}

