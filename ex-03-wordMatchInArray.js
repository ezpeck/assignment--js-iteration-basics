
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/


// ++ Write YOUR CODE Below

//entra un string y un array
//buscar el string dentro del array
//reotorna true si el string esta dentro del array o retorna false si el string no esta dentro del array

function wordMatchInArray (xstring, xarray){
	var counter = 0;
	for (var i = 0; i < xarray.length; i++) {
	 	if (xstring === xarray[i]){
      counter++;
    }
	 } 
if (counter !== 0) {
  return true;
} else {
  return false;
}
}


// const ex03 = wordMatchInArray("just", sampleWordsArray);
// console.log(ex03);




// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*------------------Sample-Data-------------------------*/

var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]
var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]

/*-------------------TEST-1-------------------------*/
//  function accepts string, and array as arguments and
//    should return boolean if string value is in array
/*--------------------------------------------------*/
console.log("==== ex-03-wordMatchInArray : TEST 1 ====");

// Expected Output: Sample Array - 1
console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

// Expected Output: Sample Array - 2
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
