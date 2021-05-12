//Control Flow//

/*Control flow is one of my favorite features of JS.
Think of control flow as "forks in the road" in your programing script.
Control Flow allows us to tell the interpeter to follow certain paths of code
based on conditions that access to true or false. Usually these conditions are in 
conditional statements called if, else-if, else. Simply put, what is inside the parentheses 
is viewed as true, if this condition is met (true) then the interpeter will execute the following block of code. 
If the condition is false, the interpeter will either stop reading that statement or go onto another condition 
with a seperate block of code, depeneding on the circumstances. There does not need to be an else if after the first
if. If there is, there is no limit to the amount of else ifs. However, once a finally else is hit, that is the end of the
chain (though this can also be ommitted)*/

//if statment example 

if (5 > 1) {
    console.log("its true!");
}

//The above code will print "its true!" because the condition in the parentheses (five is greater than 1) is true. 
//If the statement weere false, say five is less than one, nothing would print and that bit of code would end. 

//Else if example 

if (5 < 1) {
    console.log("its true!");
} else if (2 === 2) {
    console.log("first condition wasnt true, but I am!");
}

/*In the above example "first condition wasnt true, but I am!" will
print to the console. This is becasuse the first condition is not true, so,
we placed a fork in our coding road that says, go check this condition next if the 
first isnt true. 2 is strictly equal to 2, therefore the second console.log is 
ran. If neither were true nothing would happen.*/

//Else Example 

if (5 < 1) {
    console.log("its true!");
} else if (2 !== 2) {
    console.log("first condition wasnt true, but I am!");
} else {
    console.log("none of them were, true so it goes to me!");
}

/*Above we see that the first two conditions are false. Therefore,
we put a final else handling that scenario. Now, if all else fails, all
conditions are false, we have one final command that tells the intepreter
to run code. In this example "none of them were true, so it goes to me!" 
will print to the console.*/

//Switch Statement//

/*The switch statement evaluates an expression, matching the expression's value to a case 
clause, and executes statements associated with that case, as well as statements in cases that 
follow the matching case.*/

//Switch Case Example//

const foodExp = "tacos"



switch (foodExp) {
  case 1: "pizza"
  console.log("we have pizza!")
  break;
  case 2: "pasta"
  console.log("we have pasta")
  break;
  default: 
  console.log("sorry we dont have that item")
}

/*In the above example you can cleary see how a switch statment works. Our exppression 
 that we are passing through is the string "tacos" the interpreter will run through the 
 switch statement seeing if the expression is strictly equal to one of the cases. If it were
 it would run that code block and hit the break which would end it. However, I added a default statement 
 at the end that you can think of simiarly to the final else. Since, our expression does not match any
 of the cases we see "sorry we dont have that item" printed to the console.*/


