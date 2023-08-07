let myDate=new Date; // creating date object
console.log(myDate);  // output =>2023-08-07T06:30:11.470Z   (give the date in this formate)
console.log(myDate.toISOString());         // output =>2023-08-07T14:13:02.535Z
console.log(myDate.toJSON());              // output =>2023-08-07T14:13:02.535Z
console.log(myDate.toDateString());         // output =>Mon Aug 07 2023
console.log(myDate.toTimeString());             // output =>19:43:02 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());       // output =>8/7/2023
console.log(myDate.toLocaleString());         // output =>8/7/2023, 7:43:02 PM
console.log(myDate.toString());  // output =>Mon Aug 07 2023 19:43:02 GMT+0530 (India Standard Time)
console.log(myDate.getTime());         // output =>1691417582535
console.log(myDate.getDate());    // output =>7
console.log(myDate.getDay());   