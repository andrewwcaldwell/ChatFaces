module.exports = function rand (img, callback) {
    var xhr = new XMLHttpRequest(); 
    var api = 'http://api.randomuser.me/?nat=us';
    
    xhr.open('GET', api);
    xhr.onload = function () {
        
        var echo  = JSON.parse(xhr.responseText);
        callback(echo, img);
    };
    xhr.send();
};