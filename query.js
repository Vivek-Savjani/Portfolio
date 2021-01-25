
$(document).ready(function(){
    $("button").click(function(){
        var output = [];
        var testarray = [,];
        var list = 
      $.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(result){
        $.each(result, function(i, field){
          output.push(field);
        });
        console.log(output[0]);
        console.log(output[1]);
        console.log(output[2]);
        document.write(output[1])
        output.forEach(element => testarray.push(output.indexOf(element),output[output.indexOf(element)].description));
        testarray.forEach(element => console.log(element));
      });
      
    });
  });


