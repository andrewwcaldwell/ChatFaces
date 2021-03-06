module.exports = function getMsgs() { 

   var tmStmp  = require('./tmStmp');
   var link    = require('./link');
   var weather = require('./weather'); 
   var rand    = require('./rand');
   var count = 0; // counter for getRequest.onload()
   var parent = document.getElementById('parlance'); //Messages HTML Parent
   var getRequest = new XMLHttpRequest(); //AJAX Request VAR

   function retrieveChat() {
      getRequest.open('GET', 'http://chat.queencityiron.com/messages');
      getRequest.onload = function () {
         var data = JSON.parse(getRequest.responseText);
         
         if (data.length === 1 && count !== 1) { // for server reset
            count = 0;
         }// <== END Server Reset  IF Conditional
         if (data.length > count) {
            // set position for loop so that we don't post the same material
            for (var i = count; i < data.length; i++) {
            
               rand(data[i], function(img, text) {
                   //console.log(img.results[0].user.picture.medium);
               
                    var bubble = document.createElement('div'); 
                    var chatter = document.createElement('li');
                    var print = document.createElement('div');
                    var name   = document.createElement('h3');
                    var memo   = document.createElement('h4');
                    var tmstmp = document.createElement('small');
                   
                    var pic = document.createElement('img');
                    pic.src = img.results[0].user.picture.medium;
                    //console.log(pic.src);
                    pic.classList.add('profile'); 
                    bubble.classList.add('bubble');
                    print.classList.add('print');
                   
                    // if key phrase invoked in message -   call weather
                    weather.callWeather(text.message);
                   
                    name.textContent = text.user + '  says...';// Insert of link recognize and replace function.
                    memo.innerHTML = link.generateLink(text.message);// Insert of timestamp function.
                    tmstmp.textContent = tmStmp.setTmStmp(text.when);
                
                    //bubble.appendChild(pic);
                    print.appendChild(name);
                    print.appendChild(tmstmp);
                    print.appendChild(memo);   
                    chatter.appendChild(pic);
                    chatter.appendChild(print);
                    bubble.appendChild(chatter);
                    parent.appendChild(bubble);
                   
                 //////  This section for frills.
                    if (text.user === 'Andrew' || text.user === 'Brad') { 
                        bubble.classList.add('left');
                        chatter.classList.add('light');
                    } else { 
                        bubble.classList.add('right');
                        chatter.classList.add('dark');
                    } // <== END Left Justify Class Tags for Username
                    if (text.user === '') {
                        name.textContent = 'Anonymous says...';
                    }
                    if (text.message === '') {
                        memo.textContent = 'no message...';
                    }// <== END No Username Filler
                 //////  This section for frills.  
                    parent.scrollTop = parent.scrollHeight;
                   
               });// <== END Rand Callback requirements
            } // <== END FOR LOOP to review / render all essages
         } // <== END Condition for Message Count / Need Update
         // set count for next iteration
         count = data.length;
      }; // <== END getRequest.onload
      getRequest.send();
   } // <== END retrieveChat()
    
   retrieveChat(); // call retrieveChat() on page load
   setInterval(retrieveChat, 5000);  // call retrieveChat() every 5 sec
};