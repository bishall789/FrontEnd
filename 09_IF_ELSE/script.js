
const userName = prompt('Please enter your name : ');
const userAge = prompt('Please enter your age : ');


if(userAge >= 24 && userAge <= 45) {
    console.log('You are an adult, Mr.' +userName)
    console.log('Welcome to the club')
}
else{
    console.log('You are not an adult')
    console.log('You are not allowed to enter the club')
}



const userNamee = prompt('Please enter your name : ') || "Procoder"
const userAgee = prompt('Please enter your age : ') || 21
console.log(`Name : ${userNamee}`);
console.log(`Age : ${userAgee}`);


if ( userAgee >=24 ) {
console.log(`Name : ${userNamee}`);
console.log(`Age : ${userAgee}`);
console.log('You are a working professional')
}


const Day = +prompt('Please enter the day number (1-7) : ');
switch( Day ){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Invalid Day')
        break;
}

let age = 20
let isAdult = (age >=18 ) ? console.log('You are Adult') : console.log('You are not Adult')
