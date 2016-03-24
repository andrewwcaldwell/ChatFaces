var getMsgs = require('./get');
var sendMsg = require('./send');
var sendMsg = require('./random'); // <==== this code outstanding; so is the name

window.addEventListener('load', function() {

   get();
   random(); // <==== name of this function TBD
   document.getElementById('submit').addEventListener('click', send);

});