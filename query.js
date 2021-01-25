
$(document).ready(function(){
    $("button").click(function(){
        var output = [];
        var test = 1;
      $.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(result){
        $.each(result, function(i, field){
          output.push(field);
        });
        console.log(output[0]);
        console.log(output[1]);
        console.log(output[2]);
      });
      
    });
  });


