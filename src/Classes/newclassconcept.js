
import { Employee } from './classconcept.js';

let emp=new Employee('Peter',36,20.55,true);
emp.coding();
emp.reading();
emp.printing();
let res=await emp.billing();
console.log(res);