
module.exports = function get() { 

   // format timestamp
   function setTimeStmp(str) {
   
   var current = new Date();
   var ts = new Date(str);
   var month = (ts.getMonth() + 1).toString();
   var day = ts.getDate().toString();
   var year = ts.getFullYear().toString();
   // format hours for 12-hour clock
   var hours = '';
   var period = '';
   switch(true) {
      case (ts.getHours() === 0):
         hours = '12';
         period = ' am';
         break;
      case (ts.getHours() < 12):
         hours = ts.getHours().toString();
         period = ' am';
         break;
      case (ts.getHours() === 12):
         hours = ts.getHours().toString();
         period = ' pm';
         break;
      case (ts.getHours() >= 13):
         hours = (ts.getHours() - 12).toString();
         period = ' pm';
         break;
   }
   // format minutes
   var minutes = '';
   if (ts.getMinutes() < 10) {
      minutes = '0' + ts.getMinutes().toString();
   } else {
      minutes = ts.getMinutes().toString();
   }

   // set relative time stamp
   var relStmp = '';
   if (ts.getDate() === current.getDate()) {
      relStmp = 'Today, ' + hours + ':' + minutes + period;
   } else if (ts.getDate() === (current.getDate() - 1)) {
      relStmp = 'Yesterday, ' + hours + ':' + minutes + period;
   } else {
      relStmp = month + '/' + day + '/' + year + ', ' + hours + ':' + minutes + period;
   }
   return relStmp;
}

   // counter for getRequest.onload()
   var count = 0;
   // container (parent element) for retrieved chat
   var parent = document.getElementById('parlance');

   var getRequest = new XMLHttpRequest();

   function retrieveChat() {
      getRequest.open('GET', 'http://chat.queencityiron.com/messages');
      getRequest.onload = function () {
         var data = JSON.parse(getRequest.responseText);
         // if new material needs ah'postin' - start ah'postin'
         if (data.length === 1 && count !== 1) { // for server reset
            count = 0;
         }
         if (data.length > count) {
            // set position for loop so that we don't post the same material
            for (var i = count; i < data.length; i++) {
               
               var bubble = document.createElement('li');
               var name = document.createElement('h3');
               var memo = document.createElement('h4');
               var tmstmp = document.createElement('small');
               
               name.textContent = data[i].user + '  says...';
               memo.textContent = data[i].message;
               tmstmp.textContent = setTimeStmp(data[i].when);
               
               bubble.appendChild(name);
               bubble.appendChild(memo);
               bubble.appendChild(tmstmp);
               parent.appendChild(bubble);

               if (data[i].user === 'Andrew' || data[i].user === 'Brad') 
                  { bubble.classList.add('left');
               } else { 
                   bubble.classList.add('right'); 
               }
               
               if (data[i].user === '') {
                   name.textContent = 'Anonymous says...';
               }
            }
            // scroll position set to bottom
            servedMsgs.scrollTop = servedMsgs.scrollHeight;
         }
         // set count for next iteration
         count = data.length;
      }; // <== END getRequest.onload
      getRequest.send();
   } // <== END retrieveChat()

   // call retrieveChat() on page load
   retrieveChat();
   // call retrieveChat() every 5 sec thereafter
   setInterval(retrieveChat, 5000);
};