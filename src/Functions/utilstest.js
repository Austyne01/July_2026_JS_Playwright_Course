
//import default function,then {object destructuring}

//import I,{xa,username as appuname,billing as bill} from './utils.js'

import I,* as myutil from './utils.js'
console.log(myutil.xa);
console.log(myutil.username);
myutil.billing();

I();
//I=70.5;
//console.log(I);


//1. export from one file and inport in the other file.
//2. export {a,b,c} -> import {a,b,c} from './utils.js'
//3.export {a,b,c}-> import {a,b} from './utils.js' (object destructuring)
//4. can have only one defaut function or variable in a file 
//default will not be a part of object destructuring
//export default function testing -> import coding,{a,b,c} from './utils'
//5.renaming: using as keyword: as 
//rename normal variable function:
//export {a,b,c,test} ->import{a as mya,b as myb,c as myc, billing as bill}
//export default function variable -> no need of alias name change name directly in the import
//export {a,b,c,d}-> import * as obj from './utils.js'
//obj.a
//obj.b
//console.log in the utility file will by default be executed in the exported file




