
var getMsgs = require('./get');
var sendMsg = require('./send');

window.addEventListener('load', function() {

   getMsgs();
   document.getElementById('submit').addEventListener('click', sendMsg);

});
