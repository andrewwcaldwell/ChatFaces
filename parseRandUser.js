window.addEventListener('load', function () {
    //console.log('JS-HTML LINK WORKING');
    
    var heyBuddy = new XMLHttpRequest(); 
    var myFace = 'http://api.randomuser.me/?nat=us';
    var parent = document.getElementById('face');
    
    heyBuddy.open('GET', myFace);
    
    heyBuddy.onload = function () {
        //console.log(heyBuddy.responseText);
        var echo  = JSON.parse(heyBuddy.responseText);
        //console.log(echo);
        
        var sayCheese = document.createElement('img');
        sayCheese.src = echo.results[0].user.picture.medium;
        
        //sayCheese.textContent = echo.results[0].user.picture.medium;
        console.log(echo.results[0].user.picture.medium);
        
        parent.appendChild(sayCheese);
        
    };
        
    heyBuddy.send();
});