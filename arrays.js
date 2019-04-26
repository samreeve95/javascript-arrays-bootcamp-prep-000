var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.unshift("foo");
  array = clone;
  return clone;
}

'destructivelyAddElementToBeginningOfArray(array, element)

addElementToEndOfArray(array, element)

destructivelyAddElementToEndOfArray(array, element)

accessElementInArray(array, index)

destructivelyRemoveElementFromBeginningOfArray(array)

removeElementFromBeginningOfArray(array)

destructivelyRemoveElementFromEndOfArray(array)

removeElementFromEndOfArray(array)


