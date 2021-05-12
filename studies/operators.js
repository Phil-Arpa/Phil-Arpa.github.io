//OPERATORS//

/*Operators are extremely important in JS as they help us
assign data, re-assign data, compare data, perform arthimitic and 
logical expressions on data. They are everywhere and its important to know 
the types*/

//Assignment operators


//Arithmetic operators -used in mathematical expressions (+ operator also used on strings)

//+ - * / %

//code examples//

1 + 1; //addition operator

2 / 2; //division operator

8 % 2; // Remainder operator, extremely useful for figuring out even and odd and if divisible by

1 - 1; // subtraction operator 

1 * 8; // mulitplication operator 



//Comparison operators - Operators compare Data and return Booleans 
var a;
var b;

5 > 3; // greater than

3 < 5; // less than

a = b; // assignment (not equal to)

1 === 1; // strictly equal, compares value and data type

1 !== "1"; // bang operator, results in NOT, so NOT equal 

1 == "1"; //loosely equal, this will result to true 


//Logical operators are used to test for true or false. Remeber how important Booleans are??


//Operator ! (NOT) Experison  !(1===1) Result False

//Operator && (AND) Expression (1===1 && 2===2) Result True

//Operator || (or) Expression (1===1 || 1===2) Result true 



/*Unary operators (!, typeOf, -) - A unary operation is an operation with only one operand. 
This operand comes either before or after the operator.*/

/* +a // Converts to number

-a // Converts to number and negates

++a // Adds 1 to a and returns new a

a++ // Adds 1 to a and returns original a

--a // Subtracts 1 from a and returns new a

a-- // Subtracts 1 from a and returns original */

//typeOf will tell us if a value is of a certain dataype. Will not work with all datatypes
//Array.isArray works for arrays
//InstanceOf works for Date - returns true or false 


//Ternary operator (a ? b : c) - very simlar to a conditional but with easier syntax

// (condition) ? (if true, do this) : (otherwise, do this)

//Ternary code example:

(1 < 2) ? console.log("true") : console.log("false");

//Above will result in printing true because 1 is less than 2 