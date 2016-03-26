
var tmStmp = require('./tmStmp');
var getMsgs = require('./get');
var sendMsg = require('./send');

window.addEventListener('load', function() {

   tmStmp();
   getMsgs();
   document.getElementById('submit').addEventListener('click', sendMsg);

});
