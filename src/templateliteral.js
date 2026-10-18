//back tick template literal


let address=`c-5, 11: 04, Sector 3
CBD Belapur Navi Mumbai`;

console.log(address);

let a=100;
let b=200;

console.log("The sum of a+b: "+(a+b));

//backtick with place holder ${variable name}
console.log(`The value of a is ${a}`);
console.log(`The value of a is ${b}`);
console.log(`The value of a is ${a+b}`);


let name = 'shubhi';
let age = 30;
let city = 'Delhi';
let salary = 34.44;

console.log(`the emp data is: name: ${name},
    age: ${age},
    salary:${salary+1000},
    city: ${city}, India, $%$%$%$%`);

    console.log(`i love 'javascript' coding `);

    //escape character
    console.log('i am a \'good\' human');

    console.log(`Robinson | Automation | rob@gmail.com | 989898989 | robby@123`);

    let username = '$Austin$123';
console.log(`my username: ${username}`);

    let playerName = 'Christiano Ronaldo';
//span[text()='Virat Kohli']
//let xpath = "//span[text()='+playerName+']";
let xpath = `//span[text()='${playerName}']`
console.log(xpath);