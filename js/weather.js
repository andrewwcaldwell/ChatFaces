
// Open Weather Map API key - 00cf07be9deb98594ba7fc0a31073014

module.exports = {
   
   // convert from kelvin to fahrenheit
   kToF: function(K) {
      return Math.round((K * 9 / 5) - 459.67);
   },

   callWeather: function(msg) {

      msg = msg.toLowerCase();
      // check if text msg makes call to weather function with special syntax
      // syntax ==> 'What is the weather like (today, in New York, etc)'
      if (msg.indexOf('what is the weather like') > -1 || msg.indexOf('what\'s the weather like') > -1) {
         var city, location = '';
         var start, end = 0;
         
         // determine URL to call for specified location forecast
         if ((msg.indexOf('what is the weather like in')) === 0 || (msg.indexOf('what\'s the weather like in')) === 0) {
            // pull location (city) out of string
            start = msg.indexOf('in') + 3;
            end = msg.length - 1;
            city = msg.substring(start, end);
            if (city.indexOf(' ') > -1) {
               location = city.replace(' ', '%20');
            }
            if (city.indexOf(', ') > -1) {
               location = city.replace(', ', ',%20');
            }
         } else {
            // if no specific location return weather for charlotte
            // would be nice to incorp location finding API!
            location = 'charlotte,%20nc';
         }

         // use David Gouch's title case function (1 func library use case!)
         city = city.toTitleCase();

         var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + ',&appid=00cf07be9deb98594ba7fc0a31073014';

         // __ AJAX request __________________________________
         var request = new XMLHttpRequest();
         request.open('GET', url);
         request.onload = function () {
            var data = JSON.parse(request.responseText);

            var weather = document.createElement('p');
            weather.innerHTML = 'Current weather for ' + city + ':';

            var parent = document.getElementById('parlance');
            parent.appendChild(weather);
         };         
         request.send();
      }
   },
};
// +++ final output ++
// Current weather for <City>: broken clouds, 58degs.


var example = {
   "weather":[
      {
         "description":"broken clouds", // weather desciption
      }
   ],
   "main":{
      "temp":284.83, // current temp in kelvin
   },
};

