const friends=['Monica', 'Joey', 'Phoebe', 'CHandler'];
for(let i=0; i<friends.length;i++){
  //console.log('i=',i);
 //console.log('friends.length =', friends.length);
   //console.log('friends',i, friends[i]);
  console.log('friends', friends);

}

//friends.forEach(buddy=>{console.log(buddy);});

const nums=[1,2,7,44,55,88,99];
nums.forEach(num=> {console.log(num);});

const people=[
  {name: 'Sagigon',
    age: 23
  },
  {
    name: 'Anna',
    age: 22
  },
{name: 'Fara',
    age: 33
  },
  {
    name: 'Keshu',
    age: 12,
  },
]

people.forEach(person=>{console.log(person.name,person.age);});


function calculatehourlysalary(annualsalary){
  totalhours=9*5*52;
  hourlysalary=annualsalary/totalhours;
  return hourlysalary;
}

let result=calculatehourlysalary(2500000);
console.log('hourly salary =', result);

console.log(Number.MAX_VALUE * 10)