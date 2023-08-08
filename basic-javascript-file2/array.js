// array declearation first way
let array1=[1,32,43,453,563,23];
let array2=["ironman","krish",45];  
// console.log(array2[2]);  //access array whose index value is 2

// another way to declear araay 

let array3= new Array(1,2,423,12,1100); // new way to declear
// console.log(array3[3]);


// ******************************************************************************

// array method 
let array4 = [8,7,6,3,5,11,14];
array4.push(99);  //araay ke last me element ko add karta hai
// console.log(array4);
array4.pop() //araay ke last element ko remove kar return karta hai
// console.log(array4);
array4.unshift(110); // array ke start me element ko add karta hai
//console.log(array4); 
array4.shift();  // remove element from start of the array and retun element
// console.log(array4);
console.log(array4.includes(11)); //return true/false  (kya array me 11 value hai ) 
console.log(array4.indexOf(11)); // 11 kon saa index number pe hai woo return karta hai(return index number)
console.log(array4.join('-'))  // araay ko string me convert kar return karta hai
/*
console.log(array4.slice(2,4)); //output=>[6,3] 
console.log(array4); // [8,  7,  6, 3,5, 11, 14]
*/

/*

// ye main araay se splice wala element remove kar leta hai 
console.log(array4.splice(2,4))//[ 6, 3, 5, 11 ]
console.log(array4);//[ 8, 7, 14 ]

*/

// *****************************************************************************

/*
//concat()

let marvel_Hero=["spider man","iron man","hulk"]
let dc_Hero=["batman","superman","flash"]

//marvel_Hero.push(dc_Hero) //push method to (add array in araay)
// console.log(marvel_Hero) 

let allHero=marvel_Hero.concat(dc_Hero); //concat help to (add two array or more array in new array) 
// console.log(allHero); 

*/

//spread operator
//use this to merge two aur more array

let marvel_Hero=["spider man","iron man","hulk"]
let dc_Hero=["batman","superman","flash"]

let allHero=[...marvel_Hero,...dc_Hero]  //spread araay with ... (three dot and array name)
console.log(allHero);

/*

//flat()
// how to convert mulity array to single array

let another_Array=[123,32,34,54,35,234,[234,22,534,643,12,5432,123,65,[232,11,12,54,[32,11]]]]
const output_Array=another_Array.flat(Infinity);
console.log(output_Array);

*/

/*
// convert String to array
// Array.from()                =>convert with help of this string to array
let string_value="nitish raj";
let new_value=Array.from(string_value);
console.log(typeof new_value); 

*/

/*

//Array.of()   =>multiple set ko araary me dalta hai
let score1=100;
let score2=85;
let score3=585;
let score4=500;
console.log(Array.of(score1,score2,score3,score4));

*/