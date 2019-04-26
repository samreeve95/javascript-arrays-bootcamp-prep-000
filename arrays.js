var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  clone.unshift("foo");
  return clone;
}
