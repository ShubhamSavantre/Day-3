//Use this data for Question no-1

var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];


// Iterration with FOR LOOP

for (let i=0; i< object.length; i++) 
{
    console.log(`
    Name:${object[i].person}
    Age:${object[i].age}
    Company:${object[i].company}
    `);
}



// Iterration with for in loop

for (let index in object)
{
    console.log(`
    Name:${object[index].person}
    Age:${object[index].age}
    Company:${object[index].company}
    `);

}

// Iterration with for of loop

for (let i of object)
{
    console.log(`
    Name:${i.person}
    Age:${i.age}
    Company:${i.company}
    `);

}


// Iterration with forEach loop (ES-6)

object.forEach((item) => 
{
    console.log(`
    Name:${item.person}
    Age:${item.age}
    Company:${item.company}    
    `)
}
);