let myArray=[1,'Bilal',{text:'Something'}]

console.log(Array.isArray(myArray)) 

console.log(myArray.length);

// myArray.splice(0,2)
// console.log(myArray);

myArray.push('orange');
// console.log(myArray)
console.log(myArray[2]);

let mixedBag = ['book',5 , true ,false,'kaif', ['nested ' , 'array']];
console.log(mixedBag);

for (let i = 1; i <mixedBag.length; i++) {

    console.log(mixedBag[i]);

}