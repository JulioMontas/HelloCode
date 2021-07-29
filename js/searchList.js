var options = {
  valueNames: [ 'year', 'description', 'category' ]
};

var featureList = new List('search', options);

$('#filter-1950').click(function() {
  featureList.filter(function(item) {
    if (item.values().year == "1950") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-1980').click(function() {
  featureList.filter(function(item) {
    if (item.values().year == "1980") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-2000').click(function() {
  featureList.filter(function(item) {
    if (item.values().year == "2000") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Object-oriented').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Object-oriented") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-Imperative').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Imperative") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Functional').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Functional") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Logic').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Logic") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Scripting').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Scripting") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Other').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Other") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Visual').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Visual") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Esoteric').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Esoteric") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Multi').click(function() {
  featureList.filter(function(item) {
    if (item.values().description == "Multi-paradigm") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-none').click(function() {
  featureList.filter();
  return false;
});


// TOTAL of all generation
$(document).ready(function(){ 
  var divCount = $(".subtext-1950,.subtext-1980,.subtext-2000").size();
  $("#CountTotal").text(divCount);
});


// TOTAL of Years Category
$(document).ready(function(){ 
  var divCount = $(".subtext-2000").size();
  $("#Count2000").text(divCount);
  
  var divCount = $(".subtext-1980").size();
  $("#Count1980").text(divCount);
  
  var divCount = $(".subtext-1950").size();
  $("#Count1950").text(divCount);
});


// TOTAL of the paradigm
$(document).ready(function(){ 
  var divCount = $(".CountObject").size();
  $("#CountObject0").text(divCount);
  
  var divCount = $(".CountImperative").size();
  $("#CountImperative0").text(divCount);
  
  var divCount = $(".CountFunctional").size();
  $("#CountFunctional0").text(divCount);
  
  var divCount = $(".CountEsoteric").size();
  $("#CountEsoteric0").text(divCount);
  
  var divCount = $(".CountMulti").size();
  $("#CountMulti0").text(divCount);
  
  var divCount = $(".CountScripting").size();
  $("#CountScripting0").text(divCount);
  
  var divCount = $(".CountLogic").size();
  $("#CountLogic0").text(divCount);
  
  var divCount = $(".CountOther").size();
  $("#CountOther0").text(divCount);
  
  var divCount = $(".CountVisual").size();
  $("#CountVisual0").text(divCount);
  
  var divCount = $(".CountEsoteric").size();
  $("#CountEsoteric0").text(divCount);
}); 


/*
################################
###### Full Screen Loader ######
################################
*/  

$(window).load(function(){
  $('#fullScreenLoader').fadeOut(1000);
});
