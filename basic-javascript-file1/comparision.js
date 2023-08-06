// comparision operatior 
// they give output as true and false
// they comapre with value only
console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2<=1);

// ***********************************************************************

// some intresting output of comparision operatior
// avoid this type of comparision

console.log("2"==2); //true   because they check only values
console.log("5"<10); //true

console.log(null>0);
console.log(null>=0);
console.log(null==0);
console.log(null<0);     //true
console.log(null<=0);     //false

console.log(undefined>0);   //false
console.log(undefined>=0);  //false
console.log(undefined==0);  //false
console.log(undefined<0);  //false
console.log(undefined<=0); //false

//**********************************************************************

// strict comparision they check value and datatype both

console.log("2"===2); //false


//***************symbol datatype */

const id = Symbol('123')
console.log(id);



