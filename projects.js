$.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(data){
        var repo_data = '';
        
        $.each(data, function(key, value){
          var url = "http://raw.githubusercontent.com/" +  value.full_name + "/main/images/preview.png";
          repo_data += '<div class = "projcard"> ';
          repo_data += '<img src="'+url +' " onerror="this.src=`alt.png`">';
          repo_data += '<div class = "info">';
          repo_data += '<h2>'+value.name+'</h2>';
          repo_data += ' <p>'+value.description;
          repo_data += '</br>Language: '+ value.language+'</p>';
          repo_data += '<button onclick="window.location.href=`'+value.html_url+'`;" >Go to project page</button>';
          repo_data += '</div></div>';
        });
        $('#repo_table').prepend(repo_data);
    });
    $.getJSON("https://api.github.com/users/CSCoursework/repos", function(data){
      var repo_data = '';
      $.each(data, function(key,value){
        var string = value.description + "no longer empty";
        var substring = "Vivek:";
        var bool = checksubstring (string,substring);
        var url = "http://raw.githubusercontent.com/" +  value.full_name + "/main/images/preview.png";
        if (bool == true) {
            repo_data += '<div class = "projcard"> ';
            repo_data += '<img src="'+url +' " onerror="this.src=`alt.png`">';
            repo_data += '<div class = "info">';
            repo_data += '<h2>'+value.name+'</h2>';
            repo_data += ' <p>'+value.description;
            repo_data += '</br> Language:'+ value.language+'</p>';
            repo_data += '<button onclick="window.location.href=`'+value.html_url+'`;" >Go to project page</button>';
            repo_data += '</div></div>';
        }
        });
     $('#repo_table').prepend(repo_data);
 });
  
var myvar;
function pageload() {
  myVar = setTimeout(swapelements, 3000);
}
function swapelements() {
  document.getElementById("loadpage-wrap").style.display = "none";
  document.getElementById("nav").style.display = "block";
  document.getElementById("content").style.display="block";
}
    
function checksubstring(string,substring)  {return (string.indexOf(substring) !== -1)}


