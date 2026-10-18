console.log(10);
console.log('hello');

process.stdout.write(100 + '');
process.stdout.write('hello');

let i=1;
while(i<=10){
    process.stdout.write(i + ' ');
    i++;
}
//nested loops

for(let i=0; i<=5; i++){
    for(let j=0; j<=5; j++){
        process.stdout.write(i + '' + j+ ' ');
       //break;
    }
    console.log();
    //break;
    }


    for(let i=0; i<=5; i++){
    for(let j=0; j<=5; j++){
        for(let k=0; k<=5; k++){
            process.stdout.write(i + '' + j + '' + k+ ' ');
        }
        console.log();
    }console.log();
}