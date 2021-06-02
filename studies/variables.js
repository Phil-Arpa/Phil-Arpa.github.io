/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*Take a look at two other variable keywords that were introduced later in JavaScipts development to
ensure we dont run into issues with hoisting and scope. 
*/

/*the "lets" variable keyword
Let was developed in ES6 to allow us to delcare a block scoped variable.
We can optionally initalize let to a value
Variables declared by let have their scope in the block for which they 
are declared. Unlike var where the variable is declared globally. 
Does not create a property on the global object, unlike var. 

An example of scope in a function vs var 
*/
function ourExampeVar() {
    var x = 10;

    { var x = 2
    
        
    }
} // note here x will console.log as 2, because var is not blocked scoped and is the same variable

function ourExampeLet() {
    let x = 10;
    
    {
        let x = 3; // note here x is blocked scoped due to the let keyword and is not the same variable. 
    }
}

//LET REDECLARATION//
//Cannot be redeclared but can be redefined. This is a major point as we may run into mistakes using var and redeclaring variables
//that we didnt intentionally mean to. 
//Redeclaring inside the same block scope will throw a syntax error 
//A block nested inside a case clause will create a new block scope, 
//which will not yeild errors.

//LET HOISTING//
//Let is hoisted but not intialized. 
//for example//
console.log(letThis);
let letThis = "This will yeild undefined becasuse let is hoisted but not intialized";
//Again, let can be only referenced in the same scope in which it was defined, fixing the problems that came with var

//CONST variable keyWord//
/*
Const must be assigned to a value IMMEDIATELY
BLOCK SCOPED - however it cannot be redeclared or reassigned 
REDECLARATION - as stated above cannot be redeclared
HOISTING - can be hoisted but not intiazlized. 
Hoisting example:
*/
console.log(constThis);
const constThis = "This will yeild undefined becasuse const is hoisted but not intialized";
/*Thus, with this information, we know const could be useful when for absolutely know
we are not going to redeclare a varaible and do not need it to be globally scoped. However it is 
important to note that within an object or array there are some exceptions. 
For example in objects values can be changed 
*/
const Hallebot = {
  name: 'Hallebot',
  language: 'Op Spark programming'
}
Hallebot.language = "French"

console.log(Hallebot)
// {name: "Hallebot", language: "French"}

//And the same with arrays//EX
const philArr = ["hi", "im", "a", "martian"];

philArr.pop();

console.log(philArr) // ["hi", "im", "a"]

philArr.push("human")

console.log(philArr) // ["hi", "im", "a", "human"];

/*Some final points on the differences to remember
let and var don’t have to be initialized when declared. const has to be initialized when declared.

var can be redefined and redeclared; let can be redefined but not redeclared; const can’t be redefined or redeclared.

var declarations are globally or function scoped while let and const are block scoped.

use const when wanting to declare a variable that shouldn’t change.


*/