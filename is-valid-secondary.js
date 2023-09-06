/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(color){
  if(color === 'green' || color === 'purple' || color === 'orange'){
    return true
  }else{
    return false
  }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
