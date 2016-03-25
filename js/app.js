
var getMsgs = require('./get');
var sendMsg = require('./send');

window.addEventListener('load', function() {

   get();
   document.getElementById('submit').addEventListener('click', send);

});
