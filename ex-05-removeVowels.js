/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/



// ++ Write YOUR CODE Below

//entra un string
//analizar cuantas vocales tiene
//retorna el string de entrada pero sin vocales

function removeVowels(xstrig) {
	var newString = "";
	for (var i = 0; i < xstrig.length; i++) {
	var comparator = xstrig[i];
	if (comparator !== "a" && comparator !== "A" && comparator !== "e" && comparator !== "E" && comparator !== "i" && comparator !== "I" && comparator !== "o" && comparator !== "O" && comparator !== "u" && comparator !== "U"){
		newString = newString + comparator;
	}
	}
return newString;
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
//  function accepts string as arguments and
//    should return string without vowels
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 1 ====");

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )
console.assert( removeVowels('good job girls') === 'gd jb grls' )

/*-------------------TEST-2-------------------------*/
//  function should not return capital letters
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 2 ====");

console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
console.assert( removeVowels('GOOD JOB GIRLS') === 'GD JB GRLS' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
