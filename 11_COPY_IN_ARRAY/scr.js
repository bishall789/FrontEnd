const fruits = ["apple", "banana", "cherry"];
const myFruits = fruits

myFruits.push('Orange')
console.log(fruits); // ["apple", "banana", "cherry", "Orange"]
console.log(myFruits); // ["apple", "banana", "cherry", "Orange"]


// Shallow copy
// Real way to copy an array
const fruits2 = ["apple", "banana", "cherry"];
const myFruits2 = [...fruits2]
myFruits2.push('Orange')
console.log(fruits2); // ["apple", "banana", "cherry"]
console.log(myFruits2); // ["apple", "banana", "cherry", "Orange"]


// DEEP COPY

// For an Array
const fruits3 = [
    "apple",
    "banana",
    "cherry",
    {
        name: "orange",
        color: "orange"
    }   
];
const myFruits3 = [...fruits3]
myFruits3.push("Orange")
console.log(fruits3); // ["apple", "banana", "cherry"]
console.log(myFruits3); // ["apple", "banana", "cherry", "Orange"]

//For an Object
const user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
}

const user2 = structuredClone(user)
user.work = "yes"

console.log(user); // { name: 'John', age: 30, address: { city: 'New York', zip: '10001' }, work: 'yes' }
console.log(user2); // { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } }