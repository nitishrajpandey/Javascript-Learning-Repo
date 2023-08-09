// function humare kaam ko easy karta hai ekk code ko bar bar use kar usko easy karta hai 
// function declearation
function grating(){
    console.log("hello nitish raj.");
}

// function calling 
grating(); 
console.log(grating); // function refrence deta hai 

// *****************************************************************************************
/*
// function with parmeter and argument
function sum(number1,number2){ //number1 and number2 are parameter
    console.log(number1+number2);
}// ye funtion print kewal karyega return nahi karyega
sum(45,26); //45,26 is argument


// function with return

function sum1(number1,number2){ //number1 and number2 are parameter
   return number1+number2;
} //ye function return karyega isleye isko variable me store karte hai
let result=sum1(45,45); //45,26 is argument
console.log("Result : ",result);

//default parameters

function sum2(number1,number2,number3=10){  // number3 has default parameter which value is 10 by default
    return number1+number2+number3;
}
let result1=sum2(41,40,5);
console.log(result1);


*/
//***************************************************************************** */

// function with rest parameter
//to take unlimate parameter use this
function inputNumbers(...num1){ //use of ...(rest operator) all argument take into array and return
    return num1; 
}
let outcome=inputNumbers(12,54,221,7465,234,54,54,54654,445);
console.log(outcome);
console.log(typeof outcome);

/*

//pass object in function

let obj1={
    names:"nitish",
    age:21
}
function handelobject(anyobject){
    console.log(`my name is ${anyobject.names} and my age is ${anyobject.age}.`);
}
handelobject(obj1);

*/


/*
//pass array in function

let myarray=[12,32,453,63,23,42];

function handelArray(getArray){
    return getArray[2];
}

console.log(handelArray(myarray));

*/


//************************************************************************************* */

//scope    (global and local scope)

// global scope => example ke keye maan leye ekk if else kaa scope hai uske bhar jitna ve hogaa uske leye woo global scope hoga 

//local scope => block level scope ko local scope bolte hai ye curly bracket ke under hi acces hota hai 

/*
if(true){
    let a=45;
    const b=26;
    var c=43;
}

console.log(a); //this is block level scope
console.log(b); //this is block level scope
console.log(c); //this is every where acces we can

*/

/*
//scope level

function functionOne(){
    let myName="nitish raj";
    function functionTwo(){
        let address="patna";
        console.log(myName);
        console.log(address);
    }
    // console.log(address);  // this is not accessable
    functionTwo();
}
// console.log(myName);  //  this is not accessable
functionOne();

*/

//***************************************************************************************** */

/*

//type of function decleration
//1.
functionFirst()
function functionFirst(){
    console.log("function first")
}



//2.
// functionSecond()  we cannot call function before initilization in this type of functtion
const functionSecond=function(){
    console.log("function second");
}

*/

//**************************************************************************************** */

//this   => this current context ko reffer karta hai woo kiss block me hai woo uss contex ke element ko access karyega

const obj3={
    userName:"nitish raj",
    address:"patna",
    welcomeGreating:function(){
        console.log(`Hello ${this.userName} welcom to ${this.address}`);
        console.log(this); // ye pura cureent context print kar dega
    }
}

// console.log(obj3.welcomeGreating());
obj3.welcomeGreating();


console.log(this); // node me ye empty object dega but isko browser pe karyenge to window kaa sara object dikhyega kyoki waha global object window hota hai 

// this object ke under koi finction me use kar sakte hai aise hi normally function me nahi kar sakte hai


//*************************************************************************************************************** */

/*

// arrow function


const chai = () =>{
    console.log("this is arrow function ");
}
chai();


//another way

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(8,7));

// impleset return  => isme return ve nahi hota 

const addTwo=(num1,num2)=> num1+num2

//when object return in impleset 

const addTwo=(num1,num2)=> ({userName:"nitish"})

console.log(addTwo(8,7));

*/


//************************************************************************************************** */

// Immediately Invoked Function Expressions (IIFEs)

// kabhi kabhi turant function execute karna chate hai to use karte hai 
// mainly isko use karte hai taki humara function global scope se poluted hone se bachana chate ho to 

//(IIFE)

(function connecttions(){
    console.log("DB CONNECTED");
})();


//(IIFE)
((num1)=>{
    console.log(`DB CONNECTED TWO ${num1}`);
})(2);