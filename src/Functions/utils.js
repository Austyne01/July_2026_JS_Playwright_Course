//export something from one file and import in another file

//export function, variable from file 1
//import function, variable in file 2

 let xa=10;
 let username='samreen';
 function billing(){
    console.log('billing');
}

export{xa,username,billing}

/*let PI=3.14;
export default PI;*/
//can have only one default property in a file
//it will not participate in the object destructuring

export default function testing(){
    console.log('hello testing');
}
console.log(xa);
//console.log(username);
//billing();