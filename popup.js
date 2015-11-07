document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('start').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: 'alert.js'
    });
  });
});

var alerter = (function() {
  function setTimeout(function() {
    alert("start working!")
  })
})
