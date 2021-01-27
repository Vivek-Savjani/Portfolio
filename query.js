let i =0
$.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(data){
        var repo_data = '';
        
        $.each(data, function(key, value){
          var url = "http://raw.githubusercontent.com/" +  value.full_name + "/main/images/preview.png";
          if (i == 0) {repo_data += '<div class="wrapper">'}
          repo_data += '<div class = "projcard"> ';
          repo_data += '<img src="'+url +' " onerror="this.src=`alt.png`">';
          repo_data += '<div class = "info">';
          repo_data += '<h2>'+value.full_name+'</h2>';
          repo_data += ' <p>Description: '+value.description;
          repo_data += '</br>Language: '+ value.language+'</p>';
          repo_data += '<button onclick=href"'+value.html_url+'">Go to project page</button>';
          repo_data += '</div></div>';
          console.log(i);

            i +=1;
            if (i == 3) {repo_data += "</div>", i += -3}
            
        });
        $('#repo_table').append(repo_data);
    });
    $.getJSON("https://api.github.com/users/CSCoursework/repos", function(data){
      var repo_data = '';
      $.each(data, function(key, value){
        var string = value.description + "no longer empty";
        var substring = "Vivek:";
        var bool = checksubstring (string,substring);
        var url = "http://raw.githubusercontent.com/" +  value.full_name + "/main/images/preview.png"
        var alt = "'alt.png'"
        console.log(url);
        if (bool == true) {
          if (i == 0) {repo_data += '<div class="wrapper">'}
            repo_data += '<div class = "projcard"> ';
            repo_data += '<img src="'+url +' " onerror="this.src=`alt.png`">';
            repo_data += '<div class = "info">';
            repo_data += '<h2>'+value.full_name+'</h2>';
            repo_data += ' <p>Description: '+value.description;
            repo_data += '</br>Language: '+ value.language+'</p>';
            repo_data += '<button onclick=href"'+value.html_url+'">Go to project page</button>';
            repo_data += '</div></div>';
            console.log(i);
            i +=1;
            if (i == 3) {repo_data += "</div>", i += -3}
           
        }
        });
     $('#repo_table').append(repo_data);
 });
  

 var target = 'https://github.com/CSCoursework/Battleships';
    
function checksubstring(string,substring)  {return (string.indexOf(substring) !== -1)}
