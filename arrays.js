var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  clone.unshift("foo");
  return clone;
}

var array=[1];
array.unshift("foo");

const ar=[1];
var clone = ar.slice(0);
clone.unshift("foo");

console.log(array);
console.log(ar);
console.log(clone);