// for loop

for (let i = 1; i <=10; i++) {
    console.log(i);
    
}
/*
// loop ke under loop (nesting of loop)

for (let i = 1; i <=10; i++) {
    console.log(`table ${i} is printing`);
    for (let j = 1; j <10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

*/

// loop in array

const myArray=["nitish","navneet","flash","batman","spiderman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//break and continue in loop

//break

for (let index = 1; index <=20; index++) {
    if (index==7) {
        console.log("7 is my bithday stop counting");
        break;
    }
    console.log(index);
    
}


// continue


for (let index = 1; index <=20; index++) {
    if (index==7) {
        console.log("skip 7");
        continue;
    }
    console.log(index);
    
}



//********************************************************************** */

// while loop
let i=1;
while (i<10) {
    console.log(i);
    i+=2;
}

//dowhile loop
score=10
do {
    console.log(score)
    score++;
} while (score>11);