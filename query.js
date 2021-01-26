$.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(data){
        var repo_data = '';
        $.each(data, function(key, value){
            repo_data += '<tr>';
            repo_data += '<td>'+value.name+'</td>';
            repo_data += '<td>'+value.description+'</td>';
            repo_data += '<td>'+value.html_url+'</td>';
            repo_data += '<td>'+ value.language+'</td>';
            repo_data += '<tr>';
        });
        $('#repo_table').append(repo_data);
    });
    
   $.getJSON("https://api.github.com/users/CSCoursework/repos", function(data){
        var repo_data = '';
        $.each(data, function(key, value){
          var string = value.description;
          var substring = "Vivek:";
          var bool = checksubstring (string,substring);
          console.log(bool)
          if (bool == true){
          //if ( 1 == 1 ){
            repo_data += '<tr>';
            repo_data += '<td>'+value.name+'</td>';
            repo_data += '<td>'+value.description+'</td>';
            repo_data += '<td>'+value.html_url+'</td>';
            repo_data += '<td>'+ value.language+'</td>';
            repo_data += '<tr>';
          }
        });
        $('#repo_table').append(repo_data);
         
    });
    
function checksubstring(string,substring)  {return (string.indexOf(substring) !== -1)}