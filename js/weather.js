
// Open Weather Map API key - 00cf07be9deb98594ba7fc0a31073014
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

// +++ final output ++
// Current weather for <City>: broken clouds, 58degs.

// for another location statment must be 'What is the weather like in _____?'
function forecastURL (msg) {
   var city = '';
   var start, end = 0;
   msg = msg.toLowerCase();
   if ((msg.indexOf('what is the weather like in')) === 0 || (msg.indexOf('what\'s the weather like in')) === 0) {
      // pull location (city) out of string
      start = msg.indexOf('in') + 3;
      end = msg.length - 1;
      city = msg.substring(start, end);
      if (city.indexOf(' ') > -1) {
         city = city.replace(' ', '%20');
      }
      if (city.indexOf(', ') > -1) {
         city = city.replace(', ', ',%20');
      }
   } else {
      city = 'charlotte,%20nc';
   }

   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',&appid=00cf07be9deb98594ba7fc0a31073014';
   return url;
}

function kelvinToFahrenheit(K) {
   return Math.round((K * 9 / 5) - 459.67);
}

// __ AJAX request __________________________________
//function weather(callback) {
   request.open('GET', forecastURL);
   request.onload = function () {
      var data = JSON.parse(request.responseText);
      callback();
      console.log(data.weather.description);
      console.log(kelvinToFahrenheit(data.main.temp));  
   };         
   request.send();
//}

