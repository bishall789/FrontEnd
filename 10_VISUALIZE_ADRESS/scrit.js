// var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };



// var person2 = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };


// var a = 2
// var b = 2 


// var person3 = {
//     name: "John",
//     age: 30,
//     adress: {
//         street: "5th Avenue",
//         city: "New York",
//         state: "NY"
//     }
// }

// person3.work = "Google"

// delete person3.name
// person3.name = "John"


const user = {
    name: "John",
    age: 30,
    city: "New York",
    adress: {
        street: "5th Avenue",
        city: "New York",
        state: "NY"
    },
    work: "Google"
}

user.name = "Bishal"
user.gau = "Gau"
delete user.adress





const fruits = ["apple", "banana", "orange", "mango"]
fruits[0] = "grape"
fruits[1] = "kiwi"

fruits.push("pear")
fruits.pop()
fruits.shift()
fruits.unshift("strawberry")
fruits.splice(1, 2, "blueberry", "raspberry")
console.log(fruits.sort())

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]