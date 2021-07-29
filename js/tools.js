/***

W W W . H E L L O C O . D E
Build & Design by http://juliomontas.com

***/

/*
################################
###### Full Screen Loader ######
################################
*/  

$(window).load(function(){
  $('#fullScreenLoader').fadeOut(1000);
});

/*** 
Random Color
***/

var hexArray = ['#72c602','#1cafeb','#f1551d']
    var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

$("#fullScreenLoader").css("background",randomColor); //A class selector would work too
