// there are two way to declear onject 
// 1.  litral (normal way)
// 2. constructor  (singleton object)

// const singletonObject= new Object()        =>this is singleton object declearation

// ***********************************************

/*

// litral onject declearation
// value me app kuch ve de sakte hai array,object ,function,string kuch veee


let value="key4";

const obj1={
    key1:"value1",
    key2:"value2",
    "full name":"nitish raj",
    key3:"value3",
    [value]:"value4"
}

// access onject element
// 1.  dot notation

console.log(obj1.key2); // not the best way to access 

// 2.square bracket notation
console.log(obj1["full name"]); // to acess the object element
console.log(obj1["key1"]); // to acess the object element
// console.log(obj1);



//change object value
obj1.key3="address"   // change the value of key3
console.log(obj1.key3);



// freze()   => iske baat koi ve change accept nahi karyega object
Object.freeze(obj1)  // freeze the obj1 
obj1.key2="mohit"   // after freeze we cannot change the value in object 
console.log(obj1.key2);

*/


// *****************************************************************************

//object in object

const userID={
    email:"nitish@gamil.com",
    fullName:{
        userFullName:{
            firstName:"nitish",
            lastName:"Raj"
        }
    }
}

// console.log(userID);
console.log(userID.fullName); //access outer object
console.log(userID.fullName.userFullName); //access inner onject


//********************************************************************* */
/*
//objet merge 
const obj1={
    num1:"value1"
}
const obj2={
    num2:"value2"
}
const obj3={
    num3:"value3"
}
const obj4={
    num4:"value4"
}
// Object.assign()  => merge more than 1 object with this 
const mergeAll=Object.assign({},obj1,obj2,obj3,obj4)
console.log(mergeAll);

// we can merge object with sperading
const spreadingMergeAll={...obj1,...obj2,...obj3,...obj4};
console.log(spreadingMergeAll);

*/

/************************************************************************* */
// when we want all keys of object we apply this 
// Object.keys()
const obj1={
    key1:"value1",
    key2:"value2",
    "full name":"nitish raj",
    key3:"value3"
}

// console.log(Object.keys(obj1));     => retuen all keys name in araay
// console.log(Object.values(obj1));     =>retuen all values in arrays
// console.log(Object.entries(obj1));     => sab keys pair array me store ho kar print ho jayewga
// console.log(obj1.hasOwnProperty('key1'));   =>kya woo property hai true aur false me result dega 


// *****************************************************************************
/*
//                           object de-structure

const course={
    couseName:"js in hindi",
    price:520,
    instructor:"hitesh choudhary"
}

// console.log(course);
// when we want to call course instructory  every time we call like this (course.instructor) imagine if we use this multiple time there are some extratyping so we use de-structore 

const{price}=course;  // we de -structre the instructor in course 
const{instructor:guru}=course;  // we de -structre the instructor in course 
console.log(guru);
console.log(price);

*/

//********************************************************************** */
//API 
/*
//api sara json format me hota hai

//exapmle of jsone formate

{

    "name":"nitish",
    "lastname":"raj"
}

//second example of jsone formate

[
    {},
    {},
    {}
]

*/