/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color){
  if(color === 'blue' || color === 'yellow' || color === 'red'){
    return true
  }else{
    return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
