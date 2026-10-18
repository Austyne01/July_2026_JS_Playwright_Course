//&& vs &
//|| vs | all 3 conditions need to be true

let m=10;

if (m>=5 && m<1 && m<5){
    console.log('Hello');
}else{
    console.log('bye');
}

//check each and every condition in single and
let m=10;

if (m>=5 & m<1 & m<5){
    console.log('Hello');
}else{
    console.log('bye');
}

// || or operator only one condition true then true otherwise false

let t=10;
if(t>=10 || t>=5 || t>=4){
    console.log('Hello');
}else{
    console.log('byeee');
}

//check each and every condition in single or
let t=10;
if(t>=10 | t>=5 | t>=4){
    console.log('Hello');
}else{
    console.log('byeee');
}

