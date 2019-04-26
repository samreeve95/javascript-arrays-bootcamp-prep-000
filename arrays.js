var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  
  array = clone;
  clone.unshift("foo");
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


