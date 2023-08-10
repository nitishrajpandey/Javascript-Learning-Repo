// for of loop
// for of object itrate nahi kar pata hai 
//ye increment ye sab khud kar leta hai 

//example 1
const numbers=[12,32,43,21,53,24,64,23,26];
for (const num of numbers) {
    console.log(num);
}

//example 2
const greeting="hello nitish raj";
for (const greet of greeting) {
    console.log(greet);
}

//************************************************************** */

/*

//maps()

//map unique value leta hai
//map object ki tarh hota hai

const map =new Map()
map.set('IN','india');
map.set('UK','united kingdom');
map.set('fr','france');
map.set('IN','india');// ye value nahi lega kyoki map unique value leta hai

console.log(map);

// for of loop in Map()
// aise me sab array me value store ho kar dega 
for (const items of map) {
    console.log(items);
}

//using de-structure in array using for of loop in Map()
for (const [keys,values] of map) {
    console.log(keys ," -: ", values);
}
*/


//****************************************************************************************** */
/*
//for in
// isme apko keys milega usse app value nikal sakte hai 


//object itratation using for in

const myObject={
    name:"nitish",
    "last name":"raj",
    age:"21"
}

for (const key in myObject) {
   console.log(`keys is ${key} and value is ${myObject[key]}`);
    }



//for in loop in array

const myArray=["nitish","raj","navneet","raj"];
for (const key in myArray) {
    console.log(key);
    console.log(myArray[key]);
}
*/


//********************************************************************************* */

// foreach 

// foreach ekk callby function mangta hai 
//callby function kaa name nahi hota
// app callby function arrow function me ve likh sakte hai 

let myArray=["js","c","c++","python","ruby"];
// myArray.forEach(function(iteams){ // ye callby function kaa jo paramete hai woo har value ko layega myarray se 
//     console.log(iteams);
//     console.log(iteams.toUpperCase());
// })

// myArray.forEach(function(items,index,array){
//     console.log(index,items,array)
// })



//  array ke under object access using foreach

/*
const myData=[
    {
        dataName:"file1",
        size:"22kb"
    },
    {
        dataName:"file2",
        size:"52kb"
    },
    {
        dataName:"file3",
        size:"76kb"
    }
]

myData.forEach(function(iteams){
    console.log(iteams.dataName);
    console.log(iteams.size);
})

*/


//******************************************************************************** */

// filter()
// ye callby function leta hai 
//ye retun karta hai value filter kar ke

// const myNumber=[1,2,3,4,5,6,7,8,9,10];
// let newNum=myNumber.filter(function(items){
//     return items>5
// })
// console.log(newNum);
// console.log(typeof newNum);


// ****************************************************

/*

//Map()
//ye callby function leta hai 
//ye return hai value 
//ye unique value rakhta hai 

// const myNumber1=[1,2,3,4,5,6,7,8,9,10];
// let newNumber=myNumber1.map(function(iteams){
//     return iteams+10
// })
// console.log(newNumber);

*/


/*
//chaing  
// kaise ekk se jada object use kar sakte hai
const myNumber1=[1,2,3,4,5,6,7,8,9,10];
let newNumber=myNumber1
.map(function(iteams){return iteams*10})
.map(function(iteams){return iteams+1})
.filter(function(iteams){return iteams>50})

console.log(newNumber);
*/


/*

//reduce


let myArray3=[1,2,3,4,5,6,7,8,9,10]
let newresult=myArray3.reduce(function(value,currentValue){
    return value+currentValue
},0)
console.log(newresult);

//example 2

let shoping=[
    {
        iteam:"mobile",
        price:10000
    },
    {
        iteam:"tv",
        price:50807
    },
    {
        iteam:"cloths",
        price:36005
    },
    {
        iteam:"charger",
        price:7582
    }
]

const totalBill=shoping.reduce(function(accumelator,iteam){
    return accumelator+iteam.price;
},0)
console.log(totalBill);

*/