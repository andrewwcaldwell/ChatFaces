
var test = 'Check out www.happy.com';


function generateLink(str) {

   // list of top 20 tlds with most page results = .io
   var commonTld = ['.com', '.org', '.edu', '.gov', '.uk', '.net', '.ca', '.de', '.jp', '.fr', '.au', '.us', '.ru', '.ch', '.it', '.nl', '.se', '.no', '.es', '.mil', '.io'];
   
   var wrds = str.split(' ');
   var ref, link = '';

   // find URL amoung string
   for (var i = 0; i < wrds.length; i++) {
      for (var j = 0; j < commonTld.length; j++) {
          if (wrds[i].indexOf(commonTld[j]) > -1) {
            ref = wrds[i];
         }
      }
   }
   
   // format URL to clickable link
   link = '<a href="http://wwww.' + ref + '" target="_blank">' + ref + '</a>';
   
}   
