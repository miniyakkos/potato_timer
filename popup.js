$(document).ready(function(){
  $('#start').on('click', function() {
    setInterval(function(){
    if(confirm("Don't be a potato!") == true) {
        clearInterval();
      }
  }, 5000);
  })
})
var alerter1 = function() {
  setInterval(function(){
    if(confirm("Don't be a potato!") == true) {
        clearInterval(testFunction);
      }

  }, 5000);
}
  var alerter = function() {
    confirm('yo');
  }
