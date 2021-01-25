
$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(result){
        $.each(result, function(i, field){
          console.log(field)
        });
      });
    });
  });