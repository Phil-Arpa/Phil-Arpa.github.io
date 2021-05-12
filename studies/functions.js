/* Functions are part of the bread and butter of javascript.
They allow us to reuse code, write cleaner code, and thus, write less
code with less mistakes. Functions can have input parameters, and pass in arguements, but also can ommit
these two*/

//Function Examples 

//Simple function declaration// 

function addFunc(param1, param2) {
    console.log(param1 + param2)
}

//Above we have a simple function taking in the inputs or parameters, it is outputing a console.log or print
//of those two numbers together. Lets call this function with some arguments passed in 

addFunc(1,2); //this will print 3 to the console. 

//we can do the same thing with a function statment by assigning it to a variable 

//Function Expression//

var funcExp = function(param1, param2) {
    console.log(param1 + param2)
}

//We can call this expression the same way
funcExp(1,2) //will print 3 to the console. 


//Factory Functions - Functions that return an object 

//Example: 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
          //use .push method to push contact object into array  
            contacts.push(contact);
        },
        findContact: function(fullName) {
         //use for loop to iterate through contacts array
         for (let i = 0; i < contacts.length; i++) {
        // condional statement to have fullName strictly equal to contacts first and last name. use pracket notation to access loop iteration and then dot notation to access key values (string)
             if (fullName === `${contacts[i].nameFirst} ${contacts[i].nameLast}`) {
         // return contacts[i] if found (contact object)         
                  return contacts[i];
            } 
         } 
         // return undefined if not found (**must be outside of loop)
        return undefined;
        },
        removeContact: function(contact) {
            //for loop to access indexes of 
            for (let i = 0; i < contacts.length; i++) {
               //conditional to compare function parameter (contact object) to contact object in array
                if (contact === contacts[i]) {
                  //.splice method to remove that contact object (start - contacts[i], remove 1)
                    contacts.splice(contacts[i], 1);
                   }
            
            
        }
},
        printAllContactNames: function() {
            
            // create string literal for names list 
            let allNames = "";
            // for loop to access every index in contacts array
            for (let i = 0; i < contacts.length; i++) {
              // condition if saying perform code up until last index 
                if (i < contacts.length - 1) {
               //string interpolation to concat first and last name to allNames with new line (\n)
               allNames += `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`
            }   
                //string interpolation to concat first and last name to allNames WITHOUT new line (\n)
                else  {
                allNames += `${contacts[i].nameFirst} ${contacts[i].nameLast}`
            }
         }
         //return allNames string OUTSIDE OF LOOP
            return allNames;
    }
}
       
}


//Higher Order functions - functions that accept a function as an argument and/or return a call back function 

//some examples 

 function each(collection, func) {
    //condition to check if array
    if (Array.isArray(collection)) {
        //for loop to iterate through array
        for (var i = 0; i < collection.length; i++) {
            //passing in callbckFN with normal call back params
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            //passing in call back function 
            func(collection[key], key, collection);
        }
    }
}

//Closures// CLOSURES IS WHEN FUNCTION HAS ACCESS TO OUTTER SCOPES VARIABLES OR PARAMETERS ** ONLY WITH FUNCTIONS

//Scope - 2 TTYPES :
//Local scope

//Global scope

//JavaScript has function scope: Each function creates a new scope.

//Scope determines the accessibility (visibility) of these variables.

//Variables defined inside a function are not accessible (visible) from outside the function.

//EX 

//var person not accessible right here 

function someFunc(a,b) {
    var people = 0;
    people += a * b; // var person is only accesible within this function scope 
} 

//var person is not accessible down here either 


//ES6 arrow syntax - always function expression
                //with only one parameter we wouldnt need parenthese s
var es6Func = (para, param) => {
                // if only one line of code would not need brackets either 
   var add = para + param;
    return add;
}

//call that function 

es6Func(1,5) //will return 6 