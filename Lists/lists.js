function recursiveArrayCount(arr, count) {
    if (arr.length == 0) {
      return 0;
    } else {
      arr.pop();
      return count + recursiveArrayCount(arr, count);
    }
  }
  
  let myArray = [1, 10, 23, 11, 4, 48, 88];
console.log(recursiveArrayCount(myArray, 1));
  
function recursiveArrayCount(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return 1 + recursiveArrayCount(arr.slice(1));
}

function recursiveArrayCount(arr) {
    return _recursiveCount(arr, 0);
  
    function _recursiveCount(arr, count) {
      return arr.length == 0 ? count : _recursiveCount(arr.slice(1), count + 1);
    }
  }
  
  let myArray = [1, 10, 23, 11, 4, 48, 88];
  console.log(recursiveArrayCount(myArray));