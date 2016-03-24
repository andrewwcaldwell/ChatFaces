var getMsgs = require('./get');
var sendMsg = require('./send');
var sendMsg = require('./random'); // <==== this code outstanding; so is the name

window.addEventListener('load', function() {

   get();
   document.getElementById('submit').addEventListener('click', send);

});