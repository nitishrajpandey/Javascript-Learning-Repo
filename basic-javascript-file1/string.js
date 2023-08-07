// string decleration
let firstString="hello";
let secondString="world";
// ******************************

// another way to declear string
// iska type object hoga aur ye string ka character keyvalue pair me dega
const string1=new String("hello string");
console.log(string1);


// ********************************************************************
// string concationation add two string using + symbols
// avoid this method to add to string
/*let userName="nitish raj ";
let age=21;
let info=("my name is "+ userName+"and my age is "+ age)
console.log(info);*/

// *********************************************************************

// string manipulation
// use this method to add string
// advantage (isme app method apply ve kar sakte hai jaise .touppercase)
let userName="nitish raj";
let age=21;
let info=(`my name is ${userName.toUpperCase()} and my age is ${age}.`)
console.log(info);

// *************************************************************************
// $$$$$$$$$$$$$$$$$$$$$$  string  method $$$$$$$$$$$$$$$$$$$$$$
let email="nitishraj74@gmail.com";
// to access string element
console.log(email[1]);
console.log(email[5]);
// to see all function list use .__proto__
console.log(email.__proto__); // use this in console to see all method



// 1.


/*

// anchor() 

---------------------------------------------------
js code input

const myString = "Table of Contents";

document.body.innerHTML = myString.anchor("contents_anchor");

---------------

will output the following HTML:

<a name="contents_anchor">Table of Contents</a>
-----------------------------------------------------
*/



//2.
/*
// at()
// locate positive and negative both index
const arrayAt=[5,2,1,4,54,27,32];
let index=2;
let index1=-2;
console.log(`using the index of ${index} the returning value is ${arrayAt.at(index)}`)
console.log(`using the index of ${index1} the returning value is ${arrayAt.at(index1)}`)

*/


//3.

//charAt()

/*

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

*/

//4.

// charCodeAt()  => they give the ascii value of string character


//5.

/*
//concat()
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

*/


//6.

/*

// endsWith()   =>  give output true and false

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

*/

//7.

/*
//includes()

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

*/

//8.

/*
// indexof()  => give index number
// lastindexof()   => almost similar

 let paragrapgh="my name is nitish raj";
 console.log(paragrapgh.indexOf('name'));

 */

 //9.

 /*
 //length()  => length of  string

 let myString="my name is nitish";
 console.log(myString.length);
*/

//10.

//padEnd      => isme last me add karte hai 
//padstart()    =>isme start me add karte hai
/*
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "

*/

//11.

/*
// repeat()  => repeat the text

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

*/

//12.

/*
// replace()    => jo first word match karyega usko change karyega
//replaceAll()   =>jitna ve match  word hoga sab change kar dega 

const myaddress = "my adress is given below"
console.log(myaddress.replace('is','the'));

*/

//13.

/*

//slice()    => koi paragraph me se word ko slice karna

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."
console.log(str.slice(10,31));

*/

//14.

/*
//startswith()   =>return true and false


const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

*/


//15.

/*
//substring()

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

*/

//16.

/*

//toUppercase()   =>return upper case
//toLowercase()  => return lower case

let intro="MY NAME IS nitish RAJ."
console.log(intro.toLowerCase());

*/

//17.

//trim()   

const greeting = '   Hello world!   ';

console.log(greeting.trim());
// Expected output: "Hello world!";
