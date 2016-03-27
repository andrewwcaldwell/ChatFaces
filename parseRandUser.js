module.exports = function randAPI (callback) {
    var xhr = new XMLHttpRequest(); 
    var api = 'http://api.randomuser.me/?nat=us';
    
    xhr.open('GET', api);
    xhr.onload = function () {
        
        var echo  = JSON.parse(xhr.responseText);
        //console.log(echo);
        var randIMG = echo.results[0].user.picture.medium;
        callback(randIMG);
    };
    xhr.send();
};
