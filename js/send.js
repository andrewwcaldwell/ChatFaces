module.exports = function sendMsg() {

   var requestPOST = new XMLHttpRequest();
   requestPOST.open('POST', 'http://chat.queencityiron.com/messages');

   requestPOST.send(JSON.stringify({
      name: document.getElementById('user').value,
      message: document.getElementById('message').value,
   }));

   // clear values after click
   //document.getElementById('user').value = '';
   document.getElementById('message').value = '';
};
