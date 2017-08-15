$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    var surveyTotal = 0;

    $("input:checkbox[name=input]:checked").each(function(){
       var warningSigns = $(this).val();
       surveyTotal ++;
    });
   $("input:checkbox[name=coping-methods]:checked").each(function(){
    var copingMethods = $(this).val();
    surveyTotal --;
    });
    if (surveyTotal > 5){

      $("#bad").show();
    }
    else if (2 < surveyTotal && surveyTotal <= 5) {
      $("#average").show();
    }
    else {
      $("#good").show();
    }

    event.preventDefault();
  });
});
