document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('start').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: 'alert.js'
    });
    chrome.tabs.insertCSS({
      file: 'popup.css'
    });
  });
});

// $(document).ready(function(){
//   $('#start').on('click', function() {
//     setInterval(function(){
//     if(confirm("Don't be a potato!") == true) {
//         clearInterval();
//       }
//   }, 5000);
//   })
// })
// var alerter1 = function() {
//   setInterval(function(){
//     if(confirm("Don't be a potato!") == true) {
//         clearInterval(testFunction);
//       }

//   }, 5000);
// }
//   var alerter = function() {
//     confirm('yo');
//   }
