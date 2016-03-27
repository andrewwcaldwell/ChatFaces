
module.exports = {
   // create hyperlink
   generateLink: function(str) {

      // list of top 20 tlds with most page results = .io
      var commonTld = ['.com', '.org', '.edu', '.gov', '.uk', '.net', '.ca', '.de', '.jp', '.fr', '.au', '.us', '.ru', '.ch', '.it', '.nl', '.se', '.no', '.es', '.mil', '.io'];
      
      var wrds = str.split(' ');
      var ref, link, msg = '';
      var ndx = 0;

      // find URL amoung string
      for (var i = 0; i < wrds.length; i++) {
         for (var j = 0; j < commonTld.length; j++) {
             if (wrds[i].indexOf(commonTld[j]) > -1) {
               ref = wrds[i];
               ndx = i; // index of URL in string
            }
         }
      }

      if (ref === undefined) {
         msg = str;
      } else {
         // format URL to clickable link
         if (ref.indexOf('http:') === 0) {
            link = '<a href="' + ref + '" target="_blank">' + ref + '</a>';
         } else if (ref.indexOf('www.') === 0) {
            link = '<a href="http://' + ref + '" target="_blank">' + ref + '</a>';
         } else {
            link = '<a href="http://www.' + ref + '" target="_blank">' + ref + '</a>';
         }
         
         // remove text reference to URL and insert live link
         wrds[ndx] = link;
         for (var k = 0; k < wrds.length; k++) {
            if (k === wrds.length - 1) {
               msg = msg + wrds[k];
            } else {
               msg = msg + wrds[k] + ' ';
            }
         }
      }
      
      return msg;
   }
};