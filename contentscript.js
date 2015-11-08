$(document).ready(function(){
  var breakChecker = function(){
    if(confirm("Break time?") == true) {
      return true
    } else {
      return false
    }
  }
  if(breakChecker()) {
    setTimeout(function() {
      alert("Break time over!");
      setTimeout(breakChecker, 1000)
    }, 2000)
  } else {
    setTimeout(breakChecker, 5000)
  }
})
