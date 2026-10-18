

let u1={name:'Megan', age:32, city:'Scotland'};
let u2={name:'Wendy', age:22, city:'Goa'};
let u3={name:'Pranit', age:12, city:'Delhi'};
let u4={name:'Austin', age:32, city:'Mumbai'};

u1=u2;
console.log(u1.name, u1.age, u1.city);//wendy 22 Goa
console.log(u2.name, u2.age, u2.city);//wendy 22 Goa
console.log(u3.name, u3.age, u3.city);//pranit 12 Delhi
console.log(u4.name, u4.age, u4.city); //austin 32 mumbai

console.log('===========================');

u2=u3;
console.log(u1.name, u1.age, u1.city);//wendy 22 Goa
console.log(u2.name, u2.age, u2.city);//pranit 12 Delhi
console.log(u3.name, u3.age, u3.city);//pranit 12 Delhi
console.log(u4.name, u4.age, u4.city); //austin 32 mumbai

console.log('===========================');

u3=u4;
console.log(u1.name, u1.age, u1.city); //wendy 22 Goa 
console.log(u2.name, u2.age, u2.city);//pranit 12 Delhi
console.log(u3.name, u3.age, u3.city);//austin 32 mumbai
console.log(u4.name, u4.age, u4.city);//austin 32 mumbai

console.log('===========================');

u4=u1;
console.log(u1.name, u1.age, u1.city);//wendy 22 Goa
console.log(u2.name, u2.age, u2.city);//pranit 12 Delhi
console.log(u3.name, u3.age, u3.city);//austin 32 mumbai
console.log(u4.name, u4.age, u4.city);//wendy 22 Goa
