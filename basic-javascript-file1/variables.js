//you can use variable as a camel case
//we can never change the value of const 
const userID=20645;

// userID=20655;  this is error we cant change const value

console.log(userID); //to print const variable value


// **********************************************************************************************


let UserNme="nitish raj"; // we can change the value and access the value at a block level

console.log(UserNme);

UserNme="navneet raj"; //we can change the value 

console.log(UserNme);


// ************************************************************************************************
 
// avoid using var **

var age=20; // we can change and access value form any where 

console.log(age);

age=21; // change the value

console.log(age);


// *********************************************************************************************

// avoid this type of variable initilization

email = "nitishraj@gmail.com"; // we can declear variable this tyle also

console.log(email);

email="navneetraj@gmail.com"

console.log(email);

// *****************************************************************************************

let address; // this take a value as a undefined

// ***************************************************************************************


// show multiple  value using console.table

console.table([userID,UserNme,age,email,address])


// output 

/*
┌─────────┬────────────────────────┐
│ (index) │         Values         │
├─────────┼────────────────────────┤
│    0    │         20645          │
│    1    │     'navneet raj'      │
│    2    │           21           │
│    3    │ 'navneetraj@gmail.com' │
│    4    │       undefined        │
└─────────┴────────────────────────┘

*/