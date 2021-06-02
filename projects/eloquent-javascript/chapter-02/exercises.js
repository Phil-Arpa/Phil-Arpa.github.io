
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add paramter to function for number argument to be passed 
function triangles(number) {
//create string literal for hashes 
let hash = "";
//for loop to start at 0 and end less than input number
for (let i = 0; i < number; i++) {
//print hash plus 1 more hash on each loop 
  console.log(hash += "#")
}


}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add starting and ending number params to function 
function fizzBuzz(num1, num2) {
  //for loop to start and first number and end (include) at second 
  for (let i = num1; i <= num2; i++) {
    //conditional if number (i) is divisible by 3 and 5 using remiander and logical operator
    if (i % 3 === 0 && i % 5 === 0) {
      //print fizzbuzz
      console.log ("fizzbuzz"); 
       // if divisible by 3
        } else if (i % 3 === 0) {
       //print fizz
          console.log("fizz");
       //if divisible by 5
        } else if (i % 5 === 0)  {
        //print buzz  
          console.log("buzz");
        //if anything else 
        } else {
         //print remaining numbers in range 
          console.log(i);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let board = "";
    //for loop to iterate through array vertically 
    for (let i = 0; i < num; i++) {
          //nested loop to interate through array lines 
          for (let j = 0; j < num; j++) {
              //conditional to put space or # on every other index
              if ((j+i) % 2 === 0) {
                    //space for even indexes 
                    board += " "
                    // # for odd indexes 
                    } else {
                        board += "#"
                    }
                }
                //new line at the end of outside loop (vertical)
                board += "\n"
            }
            //print the board
            console.log(board)
        }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
