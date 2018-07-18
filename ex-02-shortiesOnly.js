/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should accapt as input an array of strings,
 * and it should return a new array containing
 * only those strings with less than 5 characters.
 *
*/


// ++ Write YOUR CODE Below

//entra un array de strings
//tomar cada string y verificar cuales son los que tienen menos de 5 letras
//crear un nuevo array que contenga los strings con menos de 5 letras
//sale un nuevo array que contiene solo strings de menos de 5 letras 



function shortiesOnly(array) {
  var newString = [];
  for (var i = 0; i < array.length; i++) {
    var currentString = array[i];

    if (currentString.length < 5) {
      newString.push(currentString);
    } 
  }
  return newString;
}

// const ex02 = shortiesOnly(allNames);
// console.log(ex02);









// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var moreNames = [
  'Caroline',
  'Kristen',
  'Kate',
  'Matt',
  'Ken',
  'William'
]


/*-------------------Output-------------------------*/
var shortList = shortiesOnly(allNames)
var littleNameList = shortiesOnly(moreNames)


/*-------------------TEST-1-------------------------*/
//  function accepts array as argument and
//    should return a joined string of the array values
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 1 ====");

console.assert( Array.isArray(shortList) === true )
console.assert( Array.isArray(littleNameList) === true )


/*-------------------TEST-2-------------------------*/
// Checks returned array lengths
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 2 ====");

console.assert( shortList.length === 4 )
console.assert( littleNameList.length === 3 )



/*-------------------TEST-3-------------------------*/
// Checks returned array values
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 3 ====");

// checks to see that 'Fred', 'Sam', 'Ed' are INCUDED in the `shortList` output array.
console.assert( shortList.indexOf('Sam') >= 0 )
console.assert( shortList.indexOf('Ed') >= 0 )
console.assert( shortList.indexOf('Fred') >= 0 )
// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )

// checks to see that 'Kate', 'Matt' is INCUDED in the output array.
console.assert( littleNameList.indexOf('Kate') >= 0 )
console.assert( littleNameList.indexOf('Matt') >= 0 )
console.assert( littleNameList.indexOf('Ken') >= 0 )
// checks to see that 'Caroline' is NOT in the output array.
console.assert( littleNameList.indexOf('Caroline') === -1 )


/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
