var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var ar = array;
  ar.unshift("foo");
  return ar;
}

var array=[1];
array.unshift("foo");

const ar=[1];
var arr = ar;
arr.unshift("foo");

console.log(array);
console.log(ar);