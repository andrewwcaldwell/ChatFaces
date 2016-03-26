
// look for hyperlink in string
// maybe we determine that text is a hyperlink by looking at the tld
// look for the top 20 tld's with most page results as determined by Google

var tld = ['.com', '.org', '.edu', '.gov', '.uk', '.net', '.ca', '.de', '.jp', '.fr', '.au', '.us', '.ru', '.ch', '.it', '.nl', '.se', '.no', '.es', '.mil', '.io'];

// search string for any instance of the above tld

// if tld is found then replace text containing tld with anchor tag

function textLink(str) {
   var start = 0;
   var end = 0;
   var link = '';
   
   // if any tld present find index of string where tld begins
   for (var i = 0; i < str.length; i++) {
      if (str.indexOf(tld[i]) > -1) {
         end = str.indexOf(tld[i]);
         tld = tld[i];
      }
   }

   // if any told present find index of string where link begins
   if (end > 0) {
      for (var j = end; j > 0; j--) {
         start = str.indexOf(' ') + 1;
      }
   }

   if (start !== 0 && end !== 0) {
      link = str.substring(start, end) + tld;
   }
   return link;
}
