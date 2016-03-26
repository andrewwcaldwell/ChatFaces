
module.exports = { 
   // format timestamp
   setTmStmp: function (str) {
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
};