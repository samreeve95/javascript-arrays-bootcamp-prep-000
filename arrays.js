var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.unshift(element);
  array = clone;
  return clone;
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.push("foo");
  array = clone;
  return clone;
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array;
}
function accessElementInArray(array, index)
{
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  
}
function removeElementFromBeginningOfArray(array)
{
  
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  
}
function removeElementFromEndOfArray(array)
{
  
}


