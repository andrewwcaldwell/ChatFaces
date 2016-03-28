
module.exports = function getMsgs() { 

   var tmStmp  = require('./tmStmp');
   var link    = require('./link');
   var weather = require('./weather');
   
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
               var name   = document.createElement('h3');
               var memo   = document.createElement('h4');
               var tmstmp = document.createElement('small');

               // if key phrase invoked in message - call weather
               weather.callWeather(data[i].message);
               
               name.textContent = data[i].user + '  says...';
               memo.innerHTML = link.generateLink(data[i].message);
               tmstmp.textContent = tmStmp.setTmStmp(data[i].when);
               
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
            parent.scrollTop = parent.scrollHeight;
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