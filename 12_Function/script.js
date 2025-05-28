function userInfo() {
   let name = prompt("Enter your Name : ")
    let age = prompt("Enter your Age : ")
    console.log('name : '+name +'age : '+age)
    console.log(`name : ${name} age : ${age}`)
}

userInfo()

function greet(name )
{
    console.log(`Hello ${name}`)
}

let name = prompt("Enter your name : ")
greet(name)


console.log("Program to Add two Numbers")

//Function Declaration
function add(a,b)
{
    return a+b
}

//           Function Call
let sumResult = add(10,20)
console.log(sumResult)

function userInfoo( name = 'Guest' )
{
    console.log('Hello ')
    console.log('Hello , '+name)
    console.log(`Hello , I am a Web Developer`)
}

userInfoo('John Doe')
userInfoo()


console.log("Higher Order Fucntion Execution")

function add(a,b)
{
    return a+b
}
 let finalResult = add(add(1,2),add(3,4))
 console.log(finalResult)
