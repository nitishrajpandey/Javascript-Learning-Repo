// if 

if (2==2) {
    console.log("this is true statement");
}


// if else

if (2==2) {
    console.log("this is true statement");
}else{
    console.log("else statement execuite");
}


//elseif

const number=600;
if (200>number) {
    console.log("200");
}else if(400>number){
    console.log("400");
}else if(800>number){
    console.log("800");
}else{
    console.log("under 1200");
}


//switch

const week=4;
switch (week) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
    case 6:
        console.log("6");
        break;

    default:
        console.log("re enter");
        break;
}

// truthy and falsy value


// falsy value => false,0,-0,BigInt 0n,null,undefined,NaN

//truthy value => "0",'false'," ",[],{},function(){}



// terniary operator 


// condition ? true:false

const temp=10;
(temp>5)?console.log("temp is low"):console.log("temp is high");