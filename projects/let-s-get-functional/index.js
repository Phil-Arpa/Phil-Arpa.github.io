// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-phil-arpa");
console.log("tesssstttt")
/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Phil-Arpa.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//FIRST IDEA PASSED 
// var maleCount = function(array) {
//     //use .filter to filter out male genders MAKE SURE TO RETURN HOF
//     return array.filter(function(personObj) {
//         //return new array of just males
//         return personObj.gender === "male";
//     //use .length to get length of new array (amount of males)
//     }).length; 
// };

//using es6 arrow syntax. replaces function(array) with array => *removes func keyword and parameter behind arrow. 
//same with personObjon filter HOF. no code block needed with only one line of code 
//no parentheses needed bc only one paramater 
//ONE LINE OF CODE!
var maleCount = array => array.filter(personObj => personObj.gender === "male").length;
//same idea as male count but filtering out females and using .length 
// var femaleCount =  array => array.filter(personObj => personObj.gender === "female").length;

var femaleCount = array => {
    //returning array.reduce with call back function params accumulator and currPerson (current element)
    return array.reduce(function(acc, currPerson) {
        //conditional if currentPerson (object/element) is equal to female
        if (currPerson.gender === "female") {
            //add 1 to accumulator 
            acc++;
        
        }
    //return accumulator, which will be total number of females. 
    return acc;
    //seed is set to 0 so that accumulator adds from 0
    }, 0) 
    
}

var oldestCustomer = function(array) {
    let oldest = -1
    let oldestName = ""
    array.forEach(function(personObj) {
        if (personObj.age > oldest ) {
          oldestName = personObj.name
          oldest = personObj.age;
        }
        
    })
 return oldestName;
}


var youngestCustomer = function(array) {
    let youngest = Infinity
    let youngestName = ""
    array.forEach(function(personObj) {
        if (personObj.age < youngest) {
          youngestName = personObj.name
          youngest = personObj.age;
        }
        
    })

    return youngestName;
}

var averageBalance = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {    
      sum += Number(arr[i].balance.replace(/[$,]/g, '')); 
    }
  return sum/arr.length;
};

var firstLetterCount = function(array, letter) {
    return array.reduce(function(acc, curr){
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
            acc++
        }
       return acc; 
    }, 0)
}

var friendFirstLetterCount = function(array, customer, letter) {
    
        let member = array.find(function (personObj){
            return personObj.name.toLowerCase() === customer.toLowerCase() 
              
            })
        return member.friends.reduce(function (acc, curr) {
            if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
                acc++
            }
        return acc;
        }, 0)
}
var friendsCount = function(array, name) {
    //delcare friends array 
    let friends = [];
    //iterate through 
    _.each (array, function(personObj) {
        _.each(personObj.friends, function(friend) {
            if (name === friend.name) {
                friends.push(personObj.name)
            }
        })
        
    })
    //return friends array 
    return friends 
    //
    
};

var topThreeTags = function(array) {
  
  let objArray = []
   
   let objectCount = array.map(function(personObj){
        return personObj.tags
    }).reduce(function(acc, curr) {
        return acc.concat(curr)
    }).reduce(function(acc, curr) {
        if (!acc[curr]) {
            acc[curr] = 1
        } else {
            acc[curr]++
        }
        return acc;
    }, {})
  for (let key in objectCount) {
    let newObj = {}
    newObj.name = key;
    newObj.count = objectCount[key]
    objArray.push(newObj)
  } 
let newArray = objArray.sort(function(a,b){
  return b.count - a.count;
}).slice(0,3)
let top3Tags = newArray.map(tag => tag.name)
return top3Tags
}

var genderCount = array => array.map(person => 
  person.gender).reduce((genderObj, num) => {
  if (!genderObj[num]) {
    genderObj[num] = 1
  } else {
    genderObj[num] += 1
  }
  return genderObj
},{})

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
