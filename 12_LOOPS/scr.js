// For Loop
console.log('For Loop');
for ( let i = 0; i < 5; i++ ) {
    console.log(i);
}
// For Loop with Array
const arr = [1, 2, 3, 4, 5];
for ( let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// For Loop with Object
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for ( let key in obj ) {
    console.log(key + ': ' + obj[key]);
}
console.log("While Loop")
// While loop
let i = 0;
while ( i < 5 ) {
    console.log(i);
    i++;
}
console.log("Do While Loop")
// Do While loop
let j = 0;
do {
    console.log(j);
    j++;
}while ( j < 5 );
