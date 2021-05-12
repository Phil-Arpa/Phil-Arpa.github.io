//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   //create array literal to collect
   let valuesArray = [];
    //for in loop to access values
    for (const key in object) {
     //push values to array    
        valuesArray.push(object[key]);
    }
    //return array 
    return valuesArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create Arry literal 
    let keysArry = [];
    //create string literal 
    let keysString = "";
    //for in loop to loop through object
    for (const key in object) {
    //push keys to key array     
        keysArry.push(key);
        }
    //assign keysString the keys seperated by space using .join
    keysString = keysArry.join(" ");
    //return string 
    return keysString;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create array literal 
    let valuesArry = [];
    //create string literal
    let valuesString = "";
    // for in to loop over object
    for (const key in object) {
    //conditional to sepeate values that are strings 
        if (typeof object[key] === "string") {
    //push these string values into Array using .push    
        valuesArry.push(object[key]);
        }
    
    }
    //assign to String using .join with space passed in
    valuesString = valuesArry.join(" ");
    //return string 
    return valuesString;

    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //conditional using isArray method to determine if it is an Array 
    if (Array.isArray(collection)) {
    //return "array" if true    
        return "array";
    //conditional using typeof method to determine if object
    } else if (typeof collection === "object") {
    //return "object" if true    
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return string with first letter cap'd by using bracket notation to access first index with.toUppercase and then concat rest of string with .slice
    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //turn string into all lowercase
    string = string.toLowerCase();
    //split string into array with .split (easier access to indivdual word manipulation)
    let stringArray = string.split(" ");
    //for loop to access words in array 
    for (let i = 0; i < stringArray.length; i++) {
        //assign each word to first letter cap'd using same method as above but with .substr (same effect as .slice)
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substr(1)
    }
    //assign string array to string with .join
    let capString = stringArray.join(" ");
    //return string 
    return capString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //return using string iterpolation. use .toUpperCase to capitalize first index (letter) and .subtr to concat rest of name
    return `Welcome ${object.name[0].toUpperCase() + object.name.substr(1)}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//use string interpolation like above. .toUpperCase and .substr to cap each. use dot notation to access name and species values 
    return `${object.name[0].toUpperCase() + object.name.substr(1)} is a ${object.species[0].toUpperCase() + object.species.substr(1)}`
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//assign noises to noise property of object (object.noises)
let noises = object.noises;
    //conditional statement to check if array AND if the array has values (greater than 0)
        if (Array.isArray(noises) && noises.length > 0) {
    //if true return noises in a string seperated by space, noises.join        
            return noises.join(" ");
    //else return "there are no noises"    
             } else {
            return "there are no noises";
        }
}
    



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split string into array to better access individual values (words)
    let strings = string.split(" ");
    //for loop to access values in array 
    for (let i = 0; i < strings.length; i ++) {
       //conditional if value in array is strictly equal to word argument return true 
        if (strings[i] === word) {
            return true;
        }
        //if not equal (word wasnt found) return false OUTSIDE OF LOOP
    } return false 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //use dot notation to access freinds property (array via instructions) and use push method to push in name arg
    object.friends.push(name);
    //return object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   //if statment using has own prop method to check first if object contains friends array, most important. no further if not
   if (object.hasOwnProperty("friends")) {
       //for loop to cycle through friends array using dot notation to access array within object
       for (let i = 0; i < object.friends.length; i++) {
           //condtional if names in friends array (friends[i]) mathces name arg
           if (object.friends[i] === name) {
               //if so return true
               return true; 
           }
       }
   }
    //if not return false OUTSIDE OF LOOP 
    return false
    
}   

    

  
        
    
 
    
    






//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {   
 
 //METHOD 1 with logical operators, my preferences, less lines of codes 
  //declare array literal for non friends 
  var nonFriends = [];
  //for loop to circle through array to access all values 
  for (let i = 0; i < array.length; i ++) {
      //conditional with && operators to check if name is not the objects name and name is not included in objects friend array using .includes 
            if (array[i].name !== name && !array[i].friends.includes(name)) {
                nonFriends.push(array[i].name);
            }
      
  }
    // return nonFriends array with Friends that didnt met those conditions, (not friends)
    return nonFriends;
}
  
  
  
  //METHOD 2 with if inside of if
  //create array literal for collection list 
//  var nonFriends = []
  
//   //for loop to circle through array
//   for (var i = 0; i < array.length; i++) {
//     //check if name is not the name object we're checking    
//       if (array[i].name !== name) {
//  // if the name is in the object friends array (.includes checks boolean if array includes a value, very cool method)
 
//       if (array[i].friends.includes(name) === false) {
         
      
//           nonFriends.push(array[i].name);
//         }
     
          
//       }
//   } 
  
//   return nonFriends;


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //use bracket notation to add key and value. if key is already there, new value will replace old, if not new key/value will be added 
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //for loop to access properties in array 
    for (let i = 0; i < array.length; i++) {
    //use has own prop method to check if any values in array are a property of object  
        if (object.hasOwnProperty(array[i])) {
    //if true use delete function to delete the object property using bracket notation (object[array[i]]). array[i] would be the property bc we just checked if it was a property in the conditional
           delete object[array[i]] 
        }
        
    }
    //return updated object
    return object
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//use ...Set method to remove duplicates . super cool trick 
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}