var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.unshift("foo");
  array = clone;
  return clone;
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  //var clone = array.slice(0);
  
  array.unshift("foo");
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
  
}
function accessElementInArray(array, index)
{
  
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


