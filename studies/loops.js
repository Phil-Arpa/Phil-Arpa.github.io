//Loops are great for iterating through complex data types//

//Lets take a look//

//for loop to iteraite through array indexes forward//

let newArray = [1,2,3,4,5];

for (let i = 0; i < newArray.length; i++) {
    console.log(i) // prints 0-4 
    } 
    
//Lets go backwards 

for (let i = newArray.length; i > 0; i--) {
    console.log(i) // prings 5-1
}

//lets create a better array example to show access to array elements 

let array = ["here", "we", "go"]

for (let i = 0; i < array.length; i ++) {
    console.log(array[i]) //prints here we go 
}

//we can do the same with a while loop, these are useful if we dont need a specific range 
let i = 0
while (i < array.length) {
    console.log(array[i]); //prints here we go to the console. 
    i++; //increments after each line of code
}

//Lets Loop over an object using a for in loop

var obj = {name: "phil", town: "nola", music: "saxophone", hobbies: "football"}

for (let key in obj) {
    console.log(key) //will print keys
    console.log(obj[key]) // will print values
}
