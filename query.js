let i =0
$.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(data){
        var repo_data = '';
        $.each(data, function(key, value){
          if (i == 0) {repo_data += '<div class="wrapper">'}
            repo_data += '<div class = "proj">';
            repo_data += '<h2>'+value.name+'</h2>';
            repo_data += ' <p>Description: '+value.description+'</p>';
            repo_data += '<p>'+value.html_url+'</p>';
            repo_data += '<p>Language: '+ value.language+'</p>';
            repo_data += '</div>';
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
        console.log(url);
        if (bool == true) {
          if (i == 0) {repo_data += '<div class="wrapper">'}
            repo_data += '<div class = "proj">';
            repo_data += '<h2>'+value.full_name+'</h2>';
            repo_data += ' <p>Description: '+value.description+'</p>';
            repo_data += '<img src = "'+url+'"width="500" height="600">';
            repo_data += '<p>Language: '+ value.language+'</p>';
            repo_data += '<img src "">';
            repo_data += '</div>';
            console.log(i);
           
       
            i +=1;
            if (i == 3) {repo_data += "</div>", i += -3}
           
        }
        });
     $('#repo_table').append(repo_data);
 });
  

 var target = 'https://github.com/CSCoursework/Battleships';
    
function checksubstring(string,substring)  {return (string.indexOf(substring) !== -1)}
function getimageurl(myurl){
    $.getJSON(myurl, function(data){
        var repo_data = '';
        $.each(data, function(key, adress){repo_data += adress
        console.log(adress.download_url);})
        return repo_data;
    })}