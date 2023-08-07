// number 

// simple decleration
let number1=400;
console.log(number1);

//another way to decler number 

const number2=new Number(500);
console.log(number2);

//********************************************************************* */
//number methods
/*
// 1.
//toFixed()  =>after . number of digit show
let floatNumber=12354.321425;
console.log(floatNumber.toFixed(2))

//2.
// toPrecision()  =>. ke pahele kitna kaa presion karna hai
let floatNumber1=12354.321425;
console.log(floatNumber.toPrecision(6))

//3.
// toLocaleString()  =>local indian number system me show hoga
let number3=100000000000;
console.log(number3.toLocaleString());

//4.
// toString()  => convert into String
*/

//*******************************************************************************

// maths

// console.log(Math);
// console.log(Math.PI);  // show the value of pie (similary we see log,squreroot...)
// console.log(Math.abs(-42));//output =>42 // show the absolute value (always positive)
// console.log(Math.round(4.3));//output=>4  //show the round value
// console.log(Math.round(4.6));//output=>5  //show the round value
// console.log(Math.ceil(4.2));//output=>5  //show celing value always top round karta hai 
// console.log(Math.floor(4.7));//output=>4  //show floor value always bottom round karta hai 
console.log(Math.random()); // 0 se 1 ke bich me deta hai
console.log((Math.random()*10)); // 0 se 10 ke bich me deta hai
console.log((Math.random()*10)+1); // 1 se 10 ke bich me deta hai

//sath me floor kaa use kar ke

console.log(Math.floor(Math.random()*10)+1); // 1 se 10 ke bich me deta hai


//trick 2 range ke bich me random value nikale kaa
let min=20
let max=40
console.log(Math.floor(Math.random()*(max-min+1))+min)
